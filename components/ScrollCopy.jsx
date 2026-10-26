'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useExperience } from './Experience';
const text = 'We bring ideas, technology and thoughtful design together to create practical software. From your first customer conversation to your team’s daily workflow, our products help you take the next step.';
function Word({ children, index, count, progress, reduce }) {
  const opacity = useTransform(progress, [index / count, (index + 1) / count], [0.23, 1]);
  return <motion.span style={{ opacity: reduce ? 1 : opacity }}>{children} </motion.span>;
}
export default function ScrollCopy() {
  const ref = useRef(null);
  const { reduce } = useExperience();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 85%', 'end 45%'] });
  const words = text.split(' ');
  return <p className="editorial-copy" ref={ref}>{words.map((word, index) => <Word key={index} index={index} count={words.length} progress={scrollYProgress} reduce={reduce}>{word}</Word>)}</p>;
}
