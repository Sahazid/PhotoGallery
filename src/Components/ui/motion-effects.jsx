"use client";

import { motion, useReducedMotion } from "framer-motion";

const motionElements = {
  a: motion.a,
  article: motion.article,
  div: motion.div,
  figure: motion.figure,
  footer: motion.footer,
  header: motion.header,
  section: motion.section,
};

const easing = [0.22, 1, 0.36, 1];

export function Reveal({
  as = "div",
  delay = 0,
  className,
  children,
  style,
  ...props
}) {
  const Element = motionElements[as] ?? motion.div;

  return (
    <Element
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 24, rotateX: 2 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.75,
        delay,
        ease: easing,
      }}
      style={{ transformPerspective: 1200, ...style }}
      {...props}
    >
      {children}
    </Element>
  );
}

export function TiltCard({
  as = "div",
  className,
  children,
  style,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const Element = motionElements[as] ?? motion.div;

  return (
    <Element
      className={className}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { rotateX: -2, rotateY: 2, y: -4, scale: 1.012 }
      }
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      style={{
        transformPerspective: 1100,
        transformStyle: "preserve-3d",
        ...style,
      }}
      {...props}
    >
      {children}
    </Element>
  );
}
