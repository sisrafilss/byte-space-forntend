'use client';

import { motion, useReducedMotion } from 'motion/react';
import React from 'react';

export interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  scale?: number;
  once?: boolean;
  margin?: string;
  inView?: boolean; // true = whileInView (scroll reveal), false = animate on mount (hero/auth)
}

export function FadeIn({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 24,
  scale,
  once = true,
  margin = '0px',
  inView = true,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { x: 0, y: distance };
      case 'down':
        return { x: 0, y: -distance };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  const animationTarget = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
  };

  const transitionConfig = {
    duration: shouldReduceMotion ? 0.1 : duration,
    delay,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialPosition.x,
        y: initialPosition.y,
        scale: scale && !shouldReduceMotion ? scale : 1,
      }}
      {...(inView
        ? {
            whileInView: animationTarget,
            viewport: { once, margin: margin as `${number}px` | string },
          }
        : {
            animate: animationTarget,
          })}
      transition={transitionConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}
