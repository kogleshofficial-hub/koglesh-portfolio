import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="max-w-xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/80">404 / ROUTE NOT FOUND</p>
        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">No system at this address.</h1>
        <p className="mt-5 text-sm leading-7 text-white/80">The page may have moved or the URL may be incorrect. Return to the main portfolio or open a verified case study.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link className="inline-flex min-h-11 items-center rounded-full border border-white/25 bg-white/[0.05] px-5 py-3 text-xs text-white/90 hover:border-white/40" href="/">Back to portfolio</Link>
          <Link className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 py-3 text-xs text-white/85 hover:border-white/35" href="/projects/mirror">MIRROR case study</Link>
        </div>
      </div>
    </main>
  );
}
