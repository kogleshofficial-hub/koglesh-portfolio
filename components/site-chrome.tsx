"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function SystemChrome() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;
    const pointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--spotlight-x", `${(event.clientX / window.innerWidth) * 100}%`);
        root.style.setProperty("--spotlight-y", `${(event.clientY / window.innerHeight) * 100}%`);
      });
    };
    const scrollUpdate = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty("--scroll-progress", `${max > 0 ? (window.scrollY / max) * 100 : 0}%`);
    };
    scrollUpdate();
    window.addEventListener("pointermove", pointerMove, { passive: true });
    window.addEventListener("scroll", scrollUpdate, { passive: true });
    window.addEventListener("resize", scrollUpdate, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", pointerMove);
      window.removeEventListener("scroll", scrollUpdate);
      window.removeEventListener("resize", scrollUpdate);
      root.style.removeProperty("--spotlight-x");
      root.style.removeProperty("--spotlight-y");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);
  return (
    <>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 opacity-70" style={{ background: "radial-gradient(520px circle at var(--spotlight-x, 50%) var(--spotlight-y, 20%), rgba(255,255,255,.065), transparent 65%)" }} />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.018)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div aria-hidden="true" className="scroll-progress-bar print-hide pointer-events-none fixed left-0 top-0 z-[80] h-px bg-white/80" />
    </>
  );
}

export function StatusClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const format = () => new Intl.DateTimeFormat("en-MY", {
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false, timeZone: "Asia/Kuala_Lumpur"
    }).format(new Date());
    setTime(format());
    const interval = window.setInterval(() => setTime(format()), 1000);
    return () => window.clearInterval(interval);
  }, []);
  return <time aria-label={`Current Malaysia time ${time}`}>{time}</time>;
}

const navItems = [
  ["Work", "#work"], ["About", "#about"], ["Stack", "#stack"],
  ["Milestones", "#milestones"], ["Build log", "#log"],
  ["Résumé", "/resume"], ["Contact", "#contact"]
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);
  return (
    <div className="relative md:hidden">
      <button type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" className="min-h-11 rounded-full border border-white/20 bg-white/[0.06] px-4 font-mono text-[10px] uppercase tracking-[0.12em] text-white/85">
        {open ? "Close ×" : "Menu ☰"}
      </button>
      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="absolute right-0 top-14 z-[75] w-60 rounded-xl border border-white/20 bg-[#080909] p-2 shadow-2xl shadow-black/60">
          {navItems.map(([label, href]) => href.startsWith("/") ? (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block min-h-11 rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/[0.07] hover:text-white">{label}</Link>
          ) : (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block min-h-11 rounded-lg px-3 py-3 text-sm text-white/85 transition hover:bg-white/[0.07] hover:text-white">{label}</a>
          ))}
          <p className="border-t border-white/10 px-3 py-3 font-mono text-[9px] text-white/65">Terminal shortcut: Ctrl + `</p>
        </nav>
      )}
    </div>
  );
}

export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<number | null>(null);
  useEffect(() => () => {
    if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
  }, []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("koglesh.official@gmail.com");
      setCopied(true);
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
      resetTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:koglesh.official@gmail.com";
    }
  };
  return (
    <button type="button" aria-live="polite" onClick={copyEmail} className={"min-h-11 rounded-full border px-6 py-3 font-mono text-[9px] uppercase tracking-[0.1em] transition-all duration-200 " + (copied ? "border-emerald-200/35 bg-emerald-100/[0.08] text-emerald-100" : "border-white/20 bg-white/[0.08] text-white/90 hover:border-white/35 hover:bg-white/[0.13] hover:text-white")}>
      {copied ? "[STATUS: COPIED_TO_CLIPBOARD]" : "Copy email"}
    </button>
  );
}

export function PrintButton() {
  return <button type="button" onClick={() => window.print()} className="print-hide inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white/85 transition hover:border-white/35 hover:bg-white/[0.1]">Print / Save PDF ↗</button>;
}
