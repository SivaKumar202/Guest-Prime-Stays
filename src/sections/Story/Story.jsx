import { ArrowUpRight } from "lucide-react";

const image = "/images/sections/atlanta-living-space.jpg";

export default function Story() {
  return (
    <section id="story" className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-10 lg:py-24">
      <figure className="relative h-[430px] overflow-hidden rounded-[14px] sm:h-[540px] lg:h-[640px]">
        <img
          src={image}
          alt="Open living space at Midtown Showpiece"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent" />
        <figcaption className="absolute bottom-6 left-6 right-6 text-base leading-relaxed text-white sm:bottom-8 sm:left-8 sm:text-xl">
          Spaces for the moments between your plans.
        </figcaption>
      </figure>

      <div className="story-copy">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
          The Guest Prime Stays story
        </span>
        <h2 className="mt-5 max-w-xl text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-5xl lg:text-[clamp(2.8rem,4vw,4.2rem)]">
          A stay is more than where you sleep.
        </h2>
        <p className="mt-7 font-serif text-xl italic leading-relaxed text-neutral-800">
          It&apos;s where the trip becomes yours.
        </p>
        <div className="mt-5 max-w-2xl space-y-4 text-base leading-[1.9] text-neutral-600">
          <p>
            The first coffee before the city wakes up. The conversation that
            carries on after dinner. The evening everyone finally has time to
            be in the same place. That&apos;s the feeling behind Guest Prime Stays.
          </p>
          <p>
            We believe the home you choose should be part of the experience:
            comfortable, full of character and suited to the way you travel.
          </p>
          <p>
            Our Atlanta collection brings that idea to life through Arifur&apos;s
            distinctive homes. Behind the experience, we bring the same care to
            property management—thoughtful guest support, clear communication
            and an intentional plan for each property.
          </p>
        </div>
        <a href="#stays" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#be0a20] transition hover:gap-3">
          Find your next chapter <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
