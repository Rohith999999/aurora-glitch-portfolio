import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/ParticleField";
import {
  GlitchText,
  HeroTitle,
  MarqueeText,
  ScrambleHeading,
  TypeWriter,
} from "@/components/MotionText";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paturi Rohith // Multidisciplinary Creative & Tech Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Paturi Rohith — multidisciplinary creative blending motion design, frontend development, and visual storytelling.",
      },
      { property: "og:title", content: "Paturi Rohith // Portfolio" },
      {
        property: "og:description",
        content:
          "Multidisciplinary creative: motion design, frontend development, visual systems.",
      },
    ],
  }),
  component: Portfolio,
});

const skills = [
  {
    label: "Creative Leadership",
    code: "01",
    items: ["Art Direction", "Concept Development", "Visual Strategy", "Motion Production"],
  },
  {
    label: "Design & Branding",
    code: "02",
    items: ["Graphic Design", "Print & Digital Media", "Layout & Typography", "Brand Systems"],
  },
  {
    label: "Frontend Dev",
    code: "03",
    items: ["HTML5 / CSS3", "Bootstrap Framework", "JavaScript (Basic)", "Responsive UI"],
  },
  {
    label: "Tool Mastery",
    code: "04",
    items: ["Photoshop / Illustrator", "After Effects", "Figma / Canva", "VS Code / Git"],
  },
];

const projects = [
  {
    tag: "MOTION_MEDIA",
    title: "Music Video Editing Reel",
    desc: "High-end music video editing and cinematic motion graphics. Translates raw audio into impactful visual stories.",
    tech: "AFTER EFFECTS · PREMIERE · PHOTOSHOP",
    hue: "200",
  },
  {
    tag: "WEB_INTERFACE",
    title: "Responsive Web Portfolio",
    desc: "Mobile-first responsive pages blending graphic principles with frontend code for engaging user experiences.",
    tech: "HTML5 · CSS3 · BOOTSTRAP · JS",
    hue: "40",
  },
  {
    tag: "BRAND_SYSTEM",
    title: "Graphic Branding Campaign",
    desc: "Translating strategy into functional layouts, vector assets, and beautiful digital branding elements.",
    tech: "FIGMA · ILLUSTRATOR · CANVA",
    hue: "280",
  },
];

const experience = [
  {
    role: "CCTV Installation Technician",
    company: "Radon Technologies",
    location: "Eluru",
    year: "2025",
    desc: "Engineered and deployed secure CCTV network infrastructure. Managed hardware configuration, wiring, and real-time monitoring with 100% uptime.",
  },
  {
    role: "Refrigeration & A/C Installation Technician",
    company: "Reliance ResQ Service Centre",
    location: "Vizag",
    year: "2025",
    desc: "End-to-end installation, testing, and maintenance of complex cooling systems. Diagnosed faults under tight timelines.",
  },
];

const certs = [
  { name: "Advanced Graphic Design & Visual Communication", org: "DDU-GKY" },
  { name: "Canva Design Essentials", org: "Professional Certification" },
  { name: "Refrigeration & A/C Engineering", org: "UBRSETI" },
];

function Portfolio() {
  return (
    <div className="relative min-h-screen bg-background text-foreground font-sans">
      <ParticleField />
      <div className="scanlines-overlay" />

      {/* Grid overlay */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.07] animate-grid-move"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.85 0.18 200) 1px, transparent 1px), linear-gradient(90deg, oklch(0.85 0.18 200) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Top status bar */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-3 font-mono text-xs uppercase tracking-[0.3em] backdrop-blur-md bg-background/60 border-b border-border"
      >
        <span className="text-[color:var(--cyan)] animate-flicker">● SYS.ONLINE</span>
        <span className="hidden md:inline text-muted-foreground">
          PATURI.ROHITH / v3.0 / ELURU.AP.IN
        </span>
        <span className="text-[color:var(--orange)]">2026</span>
      </motion.div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* HERO */}
        <section className="min-h-screen flex flex-col justify-center pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-[color:var(--orange)] mb-8 flex items-center gap-3"
          >
            <span className="w-12 h-px bg-[color:var(--orange)]" />
            <span className="animate-flicker">Multidisciplinary Professional</span>
          </motion.div>

          <HeroTitle words={["Paturi", "Rohith"]} />

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="mt-8 border-l-4 border-[color:var(--cyan)] pl-6 max-w-2xl"
          >
            <p className="font-tech text-lg md:text-2xl uppercase tracking-[0.3em] text-[color:var(--cyan)]">
              <TypeWriter text="Designer · Developer · Motion" />
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="mt-12 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed font-mono border border-dashed border-[color:var(--cyan)]/30 p-6 bg-[color:var(--surface)] backdrop-blur-xl"
          >
            <span className="text-[color:var(--cyan)]">&gt;</span> A highly creative and
            technically versatile multidisciplinary professional with a unique blend of
            software development training, graphic design mastery, and hands-on technical
            engineering. Adept at bridging aesthetic design with functional frontend
            development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-col items-center gap-2"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-[color:var(--cyan)]"
            >
              ↓
            </motion.span>
          </motion.div>
        </section>

        {/* MARQUEE */}
        <div className="-mx-6 md:-mx-12 my-20">
          <MarqueeText
            items={[
              "Motion Design",
              "Frontend Development",
              "Visual Strategy",
              "Brand Systems",
              "Art Direction",
            ]}
          />
        </div>

        {/* SKILLS */}
        <section className="py-24">
          <SectionLabel index="02" label="Core Competencies" />
          <ScrambleHeading className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-16">
            Skill Matrix
          </ScrambleHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-[color:var(--surface)] backdrop-blur-md border border-border p-8 hover:border-[color:var(--cyan)] transition-colors overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[color:var(--cyan)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-between items-baseline mb-6">
                  <h3 className="font-tech text-xl uppercase tracking-widest text-[color:var(--orange)]">
                    {s.label}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">[{s.code}]</span>
                </div>
                <ul className="space-y-3 font-mono text-sm">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-foreground/90">
                      <span className="text-[color:var(--cyan)]">//</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="py-24">
          <SectionLabel index="03" label="Featured Projects" />
          <ScrambleHeading className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-16">
            Showreel
          </ScrambleHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -12 }}
                className="group relative bg-[color:var(--surface)] backdrop-blur-md border border-border p-4 hover:border-[color:var(--cyan)] transition-colors"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-background border border-border"
                  style={{
                    background: `radial-gradient(circle at 30% 40%, oklch(0.3 0.15 ${p.hue} / 0.4), transparent 60%), radial-gradient(circle at 70% 70%, oklch(0.4 0.2 ${p.hue} / 0.3), transparent 50%), oklch(0.08 0.02 270)`,
                  }}
                >
                  {/* HUD */}
                  <div className="absolute inset-0 p-4 flex flex-col justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--cyan)]/80 z-10">
                    <div className="flex justify-between">
                      <span>REC ●</span>
                      <span>{p.tag}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NODE_{(i + 1).toString().padStart(3, "0")}</span>
                      <span>HD.60FPS</span>
                    </div>
                  </div>
                  {/* Brackets */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[color:var(--cyan)]" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[color:var(--cyan)]" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[color:var(--cyan)]" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[color:var(--cyan)]" />
                  {/* Scan line */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-[color:var(--cyan)] shadow-[0_0_10px_oklch(0.85_0.18_200)]"
                    animate={{ y: ["-100%", "300%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  {/* Number */}
                  <div className="absolute inset-0 flex items-center justify-center font-display text-8xl font-extrabold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    0{i + 1}
                  </div>
                </div>

                <div className="p-4 pt-6">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 font-mono">
                    {p.desc}
                  </p>
                  <p className="font-mono text-xs text-[color:var(--orange)] tracking-widest">
                    {p.tech}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="py-24">
          <SectionLabel index="04" label="Work History" />
          <ScrambleHeading className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tight mb-16">
            Field Log
          </ScrambleHeading>

          <div className="space-y-6">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ x: 12 }}
                className="group bg-[color:var(--surface)] backdrop-blur-md border-l-4 border-[color:var(--cyan)] border-y border-r border-border p-8 hover:border-r-[color:var(--cyan)] hover:border-y-[color:var(--cyan)] transition-colors"
              >
                <div className="flex flex-wrap justify-between items-baseline gap-4 mb-3">
                  <h3 className="font-display text-2xl font-bold">{e.role}</h3>
                  <span className="font-mono text-sm text-muted-foreground">
                    [{e.year}]
                  </span>
                </div>
                <p className="font-tech text-sm uppercase tracking-[0.2em] text-[color:var(--orange)] mb-4">
                  {e.company} · {e.location}
                </p>
                <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDU + CERTS */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <SectionLabel index="05" label="Education" />
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-8">
              Academic Stack
            </h3>
            <div className="space-y-4 font-mono">
              <div className="border border-border p-5 bg-[color:var(--surface)]">
                <p className="text-[color:var(--cyan)] uppercase text-sm tracking-widest mb-2">
                  Intermediate (MPC) · 68%
                </p>
                <p className="text-foreground">NRI College, Eluru</p>
                <p className="text-muted-foreground text-sm">2020 – 2021</p>
              </div>
              <div className="border border-border p-5 bg-[color:var(--surface)]">
                <p className="text-[color:var(--cyan)] uppercase text-sm tracking-widest mb-2">
                  SSC / 10th · 71.25%
                </p>
                <p className="text-foreground">Adhivarapu Pet, Eluru</p>
                <p className="text-muted-foreground text-sm">2018 – 2019</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionLabel index="06" label="Certifications" />
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase mb-8">
              Credentials
            </h3>
            <ul className="space-y-4">
              {certs.map((c) => (
                <li
                  key={c.name}
                  className="border border-border p-5 bg-[color:var(--surface)] font-mono group hover:border-[color:var(--orange)] transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-[color:var(--orange)] text-lg">◆</span>
                    <div>
                      <p className="text-foreground font-medium">{c.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{c.org}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section className="py-32 text-center">
          <SectionLabel index="07" label="Initialize Contact" center />

          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-9xl font-extrabold uppercase leading-none mb-12"
          >
            <span className="block">Let's</span>
            <span className="block text-gradient-cyan">
              <GlitchText text="Build" />
            </span>
          </motion.h2>

          <div className="font-mono text-sm md:text-base text-muted-foreground space-y-2 mb-12">
            <p>
              <span className="text-[color:var(--cyan)]">EMAIL:</span>{" "}
              rohithrockerzzzz@gmail.com
            </p>
            <p>
              <span className="text-[color:var(--cyan)]">PHONE:</span> +91 75691 91476
            </p>
            <p>
              <span className="text-[color:var(--cyan)]">LOCATION:</span> Eluru, Andhra
              Pradesh, India
            </p>
          </div>

          <motion.a
            href="mailto:rohithrockerzzzz@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block font-tech uppercase tracking-[0.4em] text-lg px-12 py-5 border-2 border-[color:var(--cyan)] text-[color:var(--cyan)] hover:bg-[color:var(--cyan)] hover:text-background transition-all glow-cyan relative overflow-hidden group"
          >
            <span className="relative z-10">Transmit Signal →</span>
          </motion.a>
        </section>

        <footer className="border-t border-border py-8 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex flex-wrap justify-between gap-4">
          <span>© 2026 PATURI.ROHITH</span>
          <span className="text-[color:var(--cyan)]">END_OF_TRANSMISSION ●</span>
        </footer>
      </main>
    </div>
  );
}

function SectionLabel({
  index,
  label,
  center = false,
}: {
  index: string;
  label: string;
  center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: center ? 0 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className={`font-mono text-xs uppercase tracking-[0.4em] text-[color:var(--orange)] mb-6 flex items-center gap-3 ${
        center ? "justify-center" : ""
      }`}
    >
      <span className="text-muted-foreground">[{index}]</span>
      <span className="w-8 h-px bg-[color:var(--orange)]" />
      <span>{label}</span>
    </motion.div>
  );
}
