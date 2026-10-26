'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, MotionConfig, useReducedMotion, useScroll, useSpring } from 'motion/react';

const ExperienceContext = createContext(null);
export const useExperience = () => useContext(ExperienceContext);

export function ExperienceProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 130, damping: 30 });
  const reduce = paused || prefersReducedMotion;

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || 'dark');
  }, []);

  useEffect(() => {
    document.body.classList.toggle('paused', Boolean(reduce));
    return () => document.body.classList.remove('paused');
  }, [reduce]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    document.body.classList.add('ready');
    return () => { observer.disconnect(); document.body.classList.remove('ready'); };
  }, [pathname]);

  useEffect(() => {
    if (reduce || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const disposers = [];
    document.querySelectorAll('.card,.use-case,.magnetic').forEach((el) => {
      const move = (event) => {
        const r = el.getBoundingClientRect();
        const x = event.clientX - r.left - r.width / 2;
        const y = event.clientY - r.top - r.height / 2;
        el.style.transform = el.classList.contains('magnetic')
          ? `translate(${x * 0.14}px,${y * 0.14}px)`
          : `perspective(1400px) rotateX(${-y / 120}deg) rotateY(${x / 100}deg) translateY(-5px)`;
      };
      const leave = () => { el.style.transform = ''; };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      disposers.push(() => {
        el.removeEventListener('pointermove', move); el.removeEventListener('pointerleave', leave); leave();
      });
    });
    return () => disposers.forEach((dispose) => dispose());
  }, [pathname, reduce]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#080b12' : '#f5f6f8');
    try { localStorage.setItem('solution-store-theme', next); } catch {}
  }

  return (
    <ExperienceContext.Provider value={{ theme, toggleTheme, reduce }}>
      <MotionConfig reducedMotion={reduce ? 'always' : 'user'}>
        <motion.div aria-hidden="true" className="progress" style={{ width: '100%', scaleX: reduce ? scrollYProgress : progress, transformOrigin: 'left' }} />
        {children}
        <button className="motion" aria-label={paused ? 'Resume animations' : 'Pause animations'} aria-pressed={paused} onClick={() => setPaused(!paused)}>
          {paused ? '▷ Resume motion' : 'Ⅱ Pause motion'}
        </button>
      </MotionConfig>
    </ExperienceContext.Provider>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ExperienceContext);
  return <button className="theme-toggle" aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} onClick={toggleTheme}>{theme === 'dark' ? '☼' : '☾'}</button>;
}

export function ProductCardMotion({ children }) {
  const { reduce } = useContext(ExperienceContext);
  return <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduce ? 0 : 0.35 }} style={{ minWidth: 0 }}>{children}</motion.div>;
}
