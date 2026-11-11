import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { motion, useInView } from "framer-motion";

export const ScrollStackItem = ({ children, index = 0, itemClassName = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.35 }); 

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.985 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.985 }}
      transition={{ duration: 0.65, ease: "easeOut", delay: index * 0.06 }}
      className={`scroll-stack-card relative my-6 w-full rounded-[28px] bg-white p-4 shadow-[0_10px_30px_rgba(2,6,23,0.08)] box-border origin-top sm:p-6 md:p-8 ${itemClassName}`}
      style={{
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </motion.div>
  );
};


const ScrollStack = ({ children, className = "", useLenis = true }) => {
  const lenisRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!useLenis) return;


    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;


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
       
        minHeight: "auto",
      }}
    >
      <div className="scroll-stack-inner mx-auto max-w-5xl px-0 pb-16 pt-8 sm:px-2 md:px-8 md:pb-20 md:pt-10">
        {React.Children.map(children, (child, i) => {
         
          return React.cloneElement(child, { index: i });
        })}
        
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
