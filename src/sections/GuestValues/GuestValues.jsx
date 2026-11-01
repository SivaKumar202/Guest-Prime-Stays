const values = [
  {
    number: "01",
    title: "Space for your people",
    description:
      "From a four-guest retreat to a two-home group getaway, choose the layout that fits your trip.",
  },
  {
    number: "02",
    title: "A place with personality",
    description:
      "Discover rooftop evenings, cottage porches and poolside afternoons—each stay has its own character.",
  },
  {
    number: "03",
    title: "Details before you arrive",
    description:
      "Review each home's amenities, rules and booking terms on its listing, so you know what to expect.",
  },
];

export default function GuestValues() {
  return (
    <section className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 pb-10 pt-5 sm:px-8 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:gap-9 lg:px-10 lg:pb-10">
      <div className="lg:pr-4">
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
          Make yourself at home
        </span>
        <h2 className="mt-4 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-[37px]">
          Less rushing.
          <br />
          More being here.
        </h2>
      </div>
      {values.map((value) => (
        <article key={value.number} className="border-t border-neutral-300 pt-5">
          <span className="text-sm font-semibold text-[#c40924]">
            {value.number}
          </span>
          <h3 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.035em] text-gp-ink">
            {value.title}
          </h3>
          <p className="mt-3 text-base leading-[1.85] text-neutral-500">
            {value.description}
          </p>
        </article>
      ))}
    </section>
  );
}
