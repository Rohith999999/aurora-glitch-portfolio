import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 animate-glitch-1 text-[color:var(--cyan)] opacity-80"
        style={{ textShadow: "2px 0 oklch(0.85 0.18 200)" }}
      >
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 animate-glitch-2 text-[color:var(--orange)] opacity-80"
        style={{ textShadow: "-2px 0 oklch(0.7 0.22 40)" }}
      >
        {text}
      </span>
    </div>
  );
}

export function ScrambleHeading({ children, className = "" }: { children: string; className?: string }) {
  const letters = children.split("");
  return (
    <h2 className={className}>
      {letters.map((l, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 30, rotateX: -90, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
        >
          {l === " " ? "\u00A0" : l}
        </motion.span>
      ))}
    </h2>
  );
}

export function TypeWriter({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className}>
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 + i * 0.04, duration: 0.05 }}
        >
          {c}
        </motion.span>
      ))}
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-[color:var(--cyan)] ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      />
    </span>
  );
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 80, rotateX: -45 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.9, delay: 1.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroTitle({ words }: { words: string[] }) {
  return (
    <h1 className="font-display font-extrabold uppercase leading-[0.85] tracking-tighter text-[clamp(3.5rem,11vw,9rem)]">
      {words.map((w, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate="show"
          className="block"
          style={{ transformOrigin: "50% 100%" }}
        >
          {i === 0 ? (
            <span className="text-gradient-cyan">{w}</span>
          ) : (
            <span className="relative inline-block">
              <GlitchText text={w} />
            </span>
          )}
        </motion.span>
      ))}
    </h1>
  );
}

export function MarqueeText({ items }: { items: string[] }) {
  const content = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-[color:var(--cyan)]/30 py-6 bg-[color:var(--cyan)]/5">
      <motion.div
        className="flex gap-12 whitespace-nowrap font-tech text-2xl md:text-4xl uppercase tracking-[0.2em]"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {content.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span className={i % 2 === 0 ? "text-[color:var(--cyan)]" : "text-foreground"}>
              {t}
            </span>
            <span className="text-[color:var(--orange)]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ParallaxSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
}
