import { useEffect, useRef, useState } from "react";

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [spin, setSpin] = useState(0);
  const spinningRef = useRef(false);

  const handleTap = () => {
    if (spinningRef.current) return;
    spinningRef.current = true;
    setSpin((s) => s + 360);
    window.setTimeout(() => {
      spinningRef.current = false;
    }, 1500);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    type P = { x: number; y: number; z: number; vx: number; vy: number; r: number };
    const particles: P[] = Array.from({ length: 80 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 400 - 200,
      vx: (Math.random() - 0.5) * 0.15,
      vy: Math.random() * 0.3 + 0.1,
      r: Math.random() * 2 + 1,
    }));

    let mx = 0, my = 0, rx = 0, ry = 0;
    const handleMouse = (e: MouseEvent) => {
      mx = ((e.clientX / w) - 0.5) * 30;
      my = -((e.clientY / h) - 0.5) * 30;
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    let raf = 0;
    const loop = () => {
      ctx.fillStyle = "rgba(8, 6, 20, 0.2)";
      ctx.fillRect(0, 0, w, h);

      rx += (mx - rx) * 0.05;
      ry += (my - ry) * 0.05;
      const cosX = Math.cos((ry * Math.PI) / 180);
      const sinX = Math.sin((ry * Math.PI) / 180);
      const cosY = Math.cos((rx * Math.PI) / 180);
      const sinY = Math.sin((rx * Math.PI) / 180);

      const pts: { x: number; y: number }[] = [];

      for (const p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        if (p.y > h) { p.y = 0; p.x = Math.random() * w; }
        if (p.x < 0 || p.x > w) p.vx *= -1;

        const cx = p.x - w / 2;
        const cy = p.y - h / 2;
        const x1 = cx * cosY - p.z * sinY;
        const z1 = cx * sinY + p.z * cosY;
        const y2 = cy * cosX - z1 * sinX;
        const z2 = cy * sinX + z1 * cosX;
        const persp = 700 / (700 + z2);
        const px = x1 * persp + w / 2;
        const py = y2 * persp + h / 2;

        if (px < 0 || px > w || py < 0 || py > h) continue;
        const grad = ctx.createRadialGradient(px, py, 0, px, py, p.r * 6 * persp);
        grad.addColorStop(0, "rgba(0, 229, 255, 0.8)");
        grad.addColorStop(0.4, "rgba(0, 229, 255, 0.2)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, p.r * persp, 0, Math.PI * 2);
        ctx.fill();
        pts.push({ x: px, y: py });
      }

      ctx.lineWidth = 0.5;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(0, 229, 255, ${0.18 * (1 - d / 130)})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", handleMouse);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        onClick={handleTap}
        onTouchStart={handleTap}
        className="fixed inset-0 z-0"
        style={{
          perspective: "1200px",
          cursor: "pointer",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `rotate(${spin}deg)`,
            transition: "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)",
            transformOrigin: "center center",
          }}
        >
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
        </div>
      </div>
      <div
        className="fixed pointer-events-none z-[60] mix-blend-screen"
        style={{
          left: mouse.x - 150,
          top: mouse.y - 150,
          width: 300,
          height: 300,
          background: "radial-gradient(circle, oklch(0.85 0.18 200 / 0.12), transparent 70%)",
          transition: "transform 0.1s ease-out",
        }}
      />
    </>
  );
}
