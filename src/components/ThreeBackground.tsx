// src/components/ThreeBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x01030f); // Very dark blue-black background

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 30;
    
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    scene.fog = new THREE.FogExp2(0x000000, 0.001);
    renderer.clear();
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;
      
      // Darker, more muted color palette
      colorsArray[i] = 0.05 + Math.random() * 0.1;     // Very dark blue
      colorsArray[i + 1] = 0.1 + Math.random() * 0.2;  // Dark blue-green
      colorsArray[i + 2] = 0.3 + Math.random() * 0.3; // Deep blue
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,  // Slightly smaller particles
      transparent: true,
      opacity: 0.6,  // More subtle opacity
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    const ambientLight = new THREE.AmbientLight(0x0a1128, 0.3); // Very dark blue ambient light
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0x00203f, 0.5); // Dark blue-grey directional light
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    const animate = () => {
      requestAnimationFrame(animate);
      
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      particlesMesh.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0003;
      
      particlesMesh.rotation.x += (targetY - particlesMesh.rotation.x) * 0.02;
      particlesMesh.rotation.y += (targetX - particlesMesh.rotation.y) * 0.02;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.remove(particlesMesh);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#000000]"
    />
  );
};

export default ThreeBackground;