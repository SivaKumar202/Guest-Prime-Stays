export default function ImageBreak() {
  return (
    <section className="relative h-[390px] overflow-hidden text-white sm:h-[460px] lg:h-[540px]">
      <img
        src="/images/sections/atlanta-living-space.jpg"
        alt="Double-height living space at Arifur’s Atlanta property"
        loading="lazy"
        className="h-full w-full object-cover object-[50%_55%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/50 to-black/50" />
      <div className="absolute bottom-9 left-5 right-5 z-10 sm:bottom-12 sm:left-8 lg:bottom-[60px] lg:left-[6%]">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-white">
          Thoughtful hosting. Intentional management.
        </span>
        <h2 className="mt-4 max-w-4xl text-5xl font-normal leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-7xl">
          The details guests love.
          <br />
          The clarity owners need.
        </h2>
      </div>
    </section>
  );
}
