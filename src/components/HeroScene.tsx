import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import type { ThemeMode } from '../data/portfolioData';

interface HeroSceneProps {
  theme: ThemeMode;
}

/**
 * WebGL canvas combining:
 * 1) "Hero Appear" (La boite à slides): faceted 3D prism shards unfolding from center
 * 2) Subtle cursor-reactive particle field adapted cleanly to Light (#f1f0ec) & Dark (#141414)
 */
export function HeroScene({ theme }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<ThemeMode>(theme);
  themeRef.current = theme;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.5);

    // 1. Faceted 3D prism shards (Hero Appear)
    const shardsGroup = new THREE.Group();
    scene.add(shardsGroup);

    const shardGeo = new THREE.BufferGeometry();
    const vertices = new Float32Array([
      -0.42, -0.32, 0.06,
      0.46, -0.18, -0.05,
      0.04, 0.48, 0.08,
    ]);
    shardGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
    shardGeo.computeVertexNormals();
    const edgeGeo = new THREE.EdgesGeometry(shardGeo);

    interface ShardData {
      mesh: THREE.Group;
      fillMat: THREE.MeshBasicMaterial;
      wireMat: THREE.LineBasicMaterial;
      isAccent: boolean;
      targetPos: THREE.Vector3;
      targetRot: THREE.Euler;
      floatPhase: number;
      floatSpeed: number;
    }

    const shards: ShardData[] = [];
    const shardCount = 16;

    for (let i = 0; i < shardCount; i++) {
      const group = new THREE.Group();
      const isAccent = i % 4 === 0;

      const fillMat = new THREE.MeshBasicMaterial({
        color: isAccent ? 0xff5c2e : 0x141414,
        transparent: true,
        opacity: isAccent ? 0.12 : 0.05,
        side: THREE.DoubleSide,
      });
      const wireMat = new THREE.LineBasicMaterial({
        color: isAccent ? 0xff5c2e : 0x8a8984,
        transparent: true,
        opacity: isAccent ? 0.42 : 0.25,
      });

      group.add(new THREE.Mesh(shardGeo, fillMat));
      group.add(new THREE.LineSegments(edgeGeo, wireMat));

      group.position.set((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2, -1.5);
      group.scale.setScalar(0.15);

      const angle = (i / shardCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.35;
      const radiusX = 3.6 + Math.random() * 3.1;
      const radiusY = 1.7 + Math.random() * 2.1;

      shardsGroup.add(group);
      shards.push({
        mesh: group,
        fillMat,
        wireMat,
        isAccent,
        targetPos: new THREE.Vector3(
          Math.cos(angle) * radiusX,
          Math.sin(angle) * radiusY,
          (Math.random() - 0.5) * 2.2 - 0.8
        ),
        targetRot: new THREE.Euler(
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI
        ),
        floatPhase: Math.random() * Math.PI * 2,
        floatSpeed: 0.4 + Math.random() * 0.45,
      });
    }

    // 2. Subtle floating particles
    const particleCount = 480;
    const pPositions = new Float32Array(particleCount * 3);
    const pBase = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * 16;
      const y = (Math.random() - 0.5) * 10;
      const z = (Math.random() - 0.5) * 6 - 1;
      pPositions[i * 3] = x;
      pPositions[i * 3 + 1] = y;
      pPositions[i * 3 + 2] = z;
      pBase[i * 3] = x;
      pBase[i * 3 + 1] = y;
      pBase[i * 3 + 2] = z;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x141414,
      transparent: true,
      opacity: 0.22,
      sizeAttenuation: true,
    });

    const particlePoints = new THREE.Points(particleGeo, particleMat);
    scene.add(particlePoints);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let scrollFactor = 0;

    const handlePointerMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    const handleScroll = () => {
      scrollFactor = Math.min(window.scrollY / (window.innerHeight * 1.1), 1.4);
    };

    const handleResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    let rafId = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const isDark = themeRef.current === 'dark';

      // Sync palette smoothly with theme
      particleMat.color.setHex(isDark ? 0xf4f1ec : 0x141414);
      particleMat.opacity = isDark ? 0.34 : 0.2;

      const elapsed = (performance.now() - startTime) * 0.001;
      const appear = Math.min(elapsed / 1.25, 1);
      const easeOut = 1 - Math.pow(1 - appear, 3);

      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      for (let i = 0; i < shards.length; i++) {
        const s = shards[i];
        if (!s.isAccent) {
          s.fillMat.color.setHex(isDark ? 0xf4f1ec : 0x141414);
          s.wireMat.color.setHex(isDark ? 0x6b6b6b : 0x9b9992);
        }

        const driftY = Math.sin(elapsed * s.floatSpeed + s.floatPhase) * 0.14;
        const driftX = Math.cos(elapsed * s.floatSpeed * 0.7 + s.floatPhase) * 0.1;

        s.mesh.position.x = s.targetPos.x * easeOut + driftX + mouse.x * 0.22;
        s.mesh.position.y = s.targetPos.y * easeOut + driftY + mouse.y * 0.18 + scrollFactor * 1.4;
        s.mesh.position.z = THREE.MathUtils.lerp(-1.5, s.targetPos.z, easeOut);

        s.mesh.rotation.x = s.targetRot.x * easeOut + elapsed * 0.11 + scrollFactor * 0.5;
        s.mesh.rotation.y = s.targetRot.y * easeOut + elapsed * 0.14;
        s.mesh.rotation.z = s.targetRot.z * easeOut;

        const targetScale = 0.7 + (i % 3) * 0.28;
        s.mesh.scale.setScalar(THREE.MathUtils.lerp(0.12, targetScale, easeOut));
      }

      const posAttr = particleGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < particleCount; i++) {
        const bx = pBase[i * 3];
        const by = pBase[i * 3 + 1];
        const bz = pBase[i * 3 + 2];
        const wave = Math.sin(elapsed * 0.55 + bx * 0.45 + by * 0.35) * 0.16;
        posAttr.setXYZ(i, bx + mouse.x * 0.3, by + wave + mouse.y * 0.2 + scrollFactor * 1.0, bz);
      }
      posAttr.needsUpdate = true;
      particlePoints.rotation.y = mouse.x * 0.05 + elapsed * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      shardGeo.dispose();
      edgeGeo.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      shards.forEach((s) => {
        s.fillMat.dispose();
        s.wireMat.dispose();
      });
      renderer.dispose();
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="hero-canvas-wrap" aria-hidden="true" />;
}
