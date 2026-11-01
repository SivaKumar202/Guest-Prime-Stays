import { ArrowUpRight, Check } from "lucide-react";

const services = [
  {
    number: "01 / REVENUE MANAGEMENT",
    title: <>You host.<br />We work the numbers.</>,
    description:
      "Keep your guest relationships and local team. Bring us in to sharpen the commercial side.",
    features: [
      "Demand-led nightly pricing and seasonal strategy",
      "Minimum stays, gap nights and discount rules",
      "Listing positioning, titles and photo sequencing",
      "Booking pace and performance reviews",
    ],
    link: "Improve my rental's performance",
  },
  {
    number: "02 / FULL-SERVICE CO-HOSTING",
    title: <>Your property.<br />Fewer moving parts.</>,
    description:
      "Revenue strategy and day-to-day coordination, with a clear point of contact for your home.",
    features: [
      "Revenue management and listing optimization",
      "Guest communication and check-in support",
      "Cleaning and turnover coordination",
      "Maintenance coordination and owner updates",
    ],
    link: "Explore full-service support",
  },
];

export default function OwnerServices() {
  return (
    <section id="owners" className="bg-[#f5f5f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 grid grid-cols-1 items-end gap-6 lg:mb-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
              For Airbnb, luxury rental &amp; hotel owners
            </span>
            <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-5xl lg:text-[clamp(2.8rem,4vw,4.2rem)]">
              Great stays for guests.
              <br />
              A thoughtful partner for owners.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-[1.9] text-neutral-600 lg:justify-self-end lg:text-[15px]">
            We manage Airbnbs and luxury vacation rentals, and provide revenue
            management for independent hotels and boutique hotels. From one
            home to a growing portfolio, our support starts with your property
            and your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-9">
          {services.map((service) => (
            <article key={service.number} className="rounded-[14px] bg-white p-7 sm:p-9 lg:p-10">
              <span className="text-sm font-bold tracking-[0.15em] text-[#be0a20]">
                {service.number}
              </span>
              <h3 className="mt-7 text-sm font-normal leading-[1.14] tracking-[-0.045em] text-gp-ink sm:text-[35px]">
                {service.title}
              </h3>
              <p className="mt-5 max-w-[400px] text-base leading-[1.75] text-neutral-600">
                {service.description}
              </p>
              <ul className="my-7">
                {service.features.map((feature) => (
                  <li key={feature} className="flex gap-3 border-b border-neutral-100 py-3.5 text-[13px] leading-relaxed text-neutral-700">
                    <Check size={15} className="mt-0.5 shrink-0 text-[#be0a20]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold text-[#be0a20] transition hover:gap-3">
                {service.link} <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
