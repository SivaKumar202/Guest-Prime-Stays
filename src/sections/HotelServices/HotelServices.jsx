import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Price each room with purpose.",
    description:
      "Room-category rate structures, weekday and weekend positioning, seasonal adjustments and local demand.",
  },
  {
    number: "02",
    title: "Make distribution work harder.",
    description:
      "Review your OTA and direct-booking mix, rate consistency, promotions and channel costs.",
  },
  {
    number: "03",
    title: "Stay ahead of booking pace.",
    description:
      "Track pickup, lead times, occupancy and demand changes to inform pricing and stay restrictions.",
  },
  {
    number: "04",
    title: "Turn reporting into decisions.",
    description:
      "Understand occupancy, average daily rate and revenue per available room, with practical next steps.",
  },
];

export default function HotelServices() {
  return (
    <section
      id="hotels"
      className="bg-[#151515] px-5 py-18 text-white sm:px-8 sm:py-15 lg:px-10 lg:py-15"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-[850px]">
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-[#ff7082]">
            Independent hotels &amp; boutique hotels
          </span>

          <h2 className="mt-5 text-[clamp(2.5rem,4.8vw,4.3125rem)] font-normal leading-[1.06] tracking-[-0.05em]">
            Every room is different.
            <br />
            Your revenue strategy
            <br className="hidden sm:block" />
            {" "}should reflect that.
          </h2>

          <p className="mt-7 max-w-[650px] text-base leading-[1.85] text-[#bbbbbb] sm:text-base">
            We provide revenue management for hotels and boutique hotels. From
            room-type pricing to distribution and booking pace, we help you
            build a more deliberate commercial plan while your team focuses on
            the guest experience.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 items-center gap-3 rounded-full bg-gp-red px-6 py-3 text-sm font-semibold text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-[1.03] hover:bg-white hover:text-[#c80924]"
          >
            Let&apos;s talk hotel revenue <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-9 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-9">
          {services.map((service) => (
            <article
              key={service.number}
              className="border-t border-[#555555] pt-5"
            >
              <span className="text-sm font-semibold text-[#ff7082]">
                {service.number}
              </span>
              <h3 className="mt-5 text-[24px] font-medium leading-[1.2] tracking-[-0.035em] text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-[1.8] text-[#aaaaaa]">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-10 border-t border-[#333333] pt-6 text-base leading-relaxed text-[#aaaaaa]">
          Built around your room inventory, current PMS and channel-manager
          capabilities.
        </p>
      </div>
    </section>
  );
}
