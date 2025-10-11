// src/components/ProjectGallery/ScrollStack.jsx
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";

/**
 * ScrollStackItem
 * - Accepts `index` (injected by ScrollStack) for stagger.
 * - Animates when it becomes visible.
 */
export const ScrollStackItem = ({ children, index = 0, itemClassName = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 }); // triggers when ~35% visible

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.985 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.985 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.06 }}
      className={`scroll-stack-card relative w-full h-80 my-8 p-8 md:p-12 rounded-[28px] shadow-[0_10px_30px_rgba(2,6,23,0.08)] box-border origin-top bg-white ${itemClassName}`}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};

/**
 * ScrollStack
 * - useLenis(true) will initialize Lenis for smooth window scroll.
 * - If you want the stack to use an internal scroll container, you can change/use props and minor code.
 */
const ScrollStack = ({ children, className = "", useLenis = true }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!useLenis) return;

    // Init Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    // RAF loop for Lenis
    const raf = (time) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      lenisRef.current = null;
    };
  }, [useLenis]);

  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        // ensure stacking area spans enough vertical space
        minHeight: "100vh",
      }}
    >
      <div className="scroll-stack-inner pt-[12vh] px-4 md:px-20 pb-[20vh] max-w-5xl mx-auto">
        {React.Children.map(children, (child, i) => {
          // inject index prop so each item can stagger
          return React.cloneElement(child, { index: i });
        })}
        {/* spacer so last item unpins/pushes cleanly */}
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
