// src/hooks/useScrollAnimation.ts
'use client';

import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Add staggered delay to animations
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Get all elements to animate
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    // Cleanup
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
};

export default useScrollAnimation;