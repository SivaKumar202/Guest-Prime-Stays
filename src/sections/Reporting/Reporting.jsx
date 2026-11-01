const reportRows = [
  {
    label: "Performance",
    detail: "Revenue, occupancy & booking pace",
  },
  {
    label: "Experience",
    detail: "Guest feedback & property priorities",
  },
  {
    label: "Direction",
    detail: "Actions, opportunities & next steps",
  },
];

export default function Reporting() {
  return (
    <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-5 pb-20 pt-4 sm:px-8 sm:pb-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:pb-28">
      <div className="h-[390px] overflow-hidden rounded-xl sm:h-[480px] lg:h-[530px]">
        <img
          src="/images/sections/midtown-suite-reporting.jpg"
          alt="Suite in Arifur’s Midtown Showpiece"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      <div>
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
          Visibility is part of the service
        </span>
        <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-5xl lg:text-[clamp(2.8rem,3.7vw,3.5rem)]">
          You should always
          <br />
          know the plan.
        </h2>
        <p className="mt-5 max-w-xl text-[18px] leading-[1.8] text-neutral-600">
          Understand how your property is performing and what we&apos;re doing
          about it. We connect the numbers to the decisions behind them.
        </p>

        <div className="mt-7">
          {reportRows.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-neutral-300 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
            >
              <strong className="text-base font-medium text-gp-ink">
                {row.label}
              </strong>
              <span className="text-sm leading-relaxed text-neutral-500 sm:text-right">
                {row.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
