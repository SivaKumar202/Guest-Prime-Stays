import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-170 h-[calc(100svh-76px)] max-h-250 overflow-hidden bg-neutral-900 text-white sm:h-[calc(100svh-86px)] lg:h-[calc(100svh-92px)]"
    >
      <img
        src="/images/hero-midtown-showpiece.jpg"
        alt="Heated saltwater pool at Arifur’s Midtown Showpiece in Atlanta"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[center_53%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,.69),rgba(0,0,0,.22)_72%),linear-gradient(0deg,rgba(0,0,0,.6),transparent_35%)]" />

      <div className="relative max-w-262.5 px-[6%] pt-[9vh] pb-44 sm:pt-[8vh] lg:pt-[9vh]">
        <p className="mb-5 text-xl font-bold uppercase tracking-[.2em] sm:text-[11px] sm:tracking-[2px]">
          Stay a little closer to what matters
        </p>
        <h1 className="mb-7 text-[clamp(43px,6.7vw,100px)] font-medium leading-[1.02] tracking-[-.055em]">
          Come for Atlanta.
          <br />
          <span className="font-serif font-normal italic tracking-[-.045em]">
            Stay for the feeling.
          </span>
        </h1>
        <p className="max-w-117.5 text-[20px] leading-[1.65] text-neutral-100 sm:text-[17px]">
          Poolside afternoons. Slow mornings. Everyone under one roof. Find a
          place that makes your time in Atlanta feel like your own.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3 sm:mt-8">
          <a
            href="#stays"
            className="inline-flex items-center gap-7 rounded-full bg-gp-red px-7 py-4.5 text-[13px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#b20820]"
          >
            Discover our stays <ArrowUpRight size={16} />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 border-b border-white/55 py-3 text-[13px] transition hover:border-white hover:text-gp-red"
          >
            The story behind your stay <ArrowDown size={13} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-16.25 left-[6%] right-[6%] flex items-end justify-between gap-5 sm:bottom-7">
        <div>
          <span className="mb-2 block text-sm uppercase tracking-[2px]">
            A closer look
          </span>
          <b className="text-2xl font-medium">Midtown Showpiece</b>
          <p className="mt-1 text-sm text-neutral-200">
            Atlanta · A private poolside escape
          </p>
        </div>
        <a
          href="https://www.airbnb.com/rooms/746387330535918328"
          target="_blank"
          rel="noreferrer"
          className="mb-1 inline-flex max-w-full items-center gap-1 border-b border-white/50 pb-2 text-right md:text-base sm:text-xs hover:text-gp-red"
        >
          Explore this home <ArrowUpRight size={13} />
        </a>
      </div>
    </section>
  );
}
