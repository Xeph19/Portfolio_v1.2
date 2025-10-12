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
       
        minHeight: "100vh",
      }}
    >
      <div className="scroll-stack-inner pt-[12vh] px-4 md:px-20 pb-[20vh] max-w-5xl mx-auto">
        {React.Children.map(children, (child, i) => {
         
          return React.cloneElement(child, { index: i });
        })}
        
        <div className="scroll-stack-end w-full h-px" />
      </div>
    </div>
  );
};

export default ScrollStack;
