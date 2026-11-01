const steps = [
  {
    number: "01",
    title: "Discover the opportunity",
    description:
      "Review the property, current listings, booking history and your priorities. Identify where our support can help.",
  },
  {
    number: "02",
    title: "Build the right plan",
    description:
      "Agree on services, fees, responsibilities and access. Set a starting point for measuring progress.",
  },
  {
    number: "03",
    title: "Launch, learn and refine",
    description:
      "Put the plan into action, monitor performance and keep you informed about the next decisions.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="mx-auto max-w-375 px-5 py-20 sm:px-8 sm:py-8 lg:px-5 lg:py-10"
    >
      <div className="flex flex-col gap-5 lg:mb-0 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
            From first conversation to ongoing care
          </span>
          <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-5xl lg:text-[clamp(2.8rem,3.7vw,3.5rem)]">
            Clear from the start.
            <br />
            Connected throughout.
          </h2>
        </div>

        <p className="mb-1 max-w-100 text-base leading-[1.85] text-neutral-600 sm:text-[18px]">
          A defined scope. A practical plan. Regular conversations about what
          is working and what needs attention.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:mt-15 lg:grid-cols-3 lg:gap-11">
        {steps.map((step) => (
          <article key={step.number} className="border-t border-[#dddddd] pt-6">
            <span className="text-sm font-semibold text-gp-red">
              {step.number}
            </span>
            <h3 className="mt-6 text-2xl font-medium leading-tight tracking-[-0.04em] text-gp-ink">
              {step.title}
            </h3>
            <p className="mt-3 max-w-97.5 text-base leading-[1.8] text-neutral-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
