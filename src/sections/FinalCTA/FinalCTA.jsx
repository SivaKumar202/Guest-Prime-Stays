import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative isolate flex min-h-[540px] w-full flex-col items-center justify-center overflow-hidden bg-neutral-900 px-5 py-20 text-center text-white sm:min-h-[540px]">
      {/* Background Image */}
      <img
        src="/images/sections/atlanta-living-space.jpg"
        alt="Beautiful Atlanta vacation home interior"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px]">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-white">
          Make room for a good trip
        </span>

        <h2 className="mx-auto mt-6 max-w-[850px] text-[clamp(2.5rem,5vw,4.8rem)] font-normal leading-[1.05] tracking-[-0.05em]">
          Your Atlanta story
          <br />
          starts with a place to stay.
        </h2>

        <a
          href="#stays"
          className="mt-10 inline-flex min-h-[70px] items-center justify-center gap-3 rounded-full bg-white px-9 py-4 text-sm font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#c80924] hover:text-white"
        >
          Explore the collection
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
