const faqs = [
  {
    question: "How do I book a stay?",
    answer:
      "Choose a home and follow its Airbnb link to check live availability, rates and the full booking terms. Your reservation and payment are completed on Airbnb.",
  },
  {
    question: "Are the dates shown here live availability?",
    answer:
      "No. This website helps you explore stays by group size and type. Your selected dates are passed to the Airbnb listing, where availability and the final price are confirmed.",
  },
  {
    question: "What is the two-home getaway?",
    answer:
      "It combines Berkeley Cottage and Urban Nature Retreat in a single booking. These are also listed individually, so the combined option is another way to book the same homes—not two additional properties.",
  },
  {
    question: "Can I bring my pet or arrange pool heating?",
    answer:
      "Pet policies, fees and pool-heating options vary by property. Check the individual Airbnb listing and confirm any special requests with the host before booking.",
  },
  {
    question: "Do you also work with property owners and hotels?",
    answer:
      "Yes. We manage Airbnbs and luxury vacation rentals and offer revenue management for independent hotels and boutique hotels. Explore our owner services or contact us for a property-specific proposal.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto grid max-w-375 grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10 lg:py-10">
      <div>
        <span className="text-sm font-bold uppercase tracking-[0.22em] text-gp-red">
          Before you pack
        </span>
        <h2 className="mt-5 text-4xl font-normal leading-[1.08] tracking-[-0.045em] text-gp-ink sm:text-5xl lg:text-[clamp(2.8rem,3.7vw,3.5rem)]">
          A few things
          <br />
          worth knowing.
        </h2>
      </div>

      <div className="border-t border-neutral-300">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="group border-b border-neutral-300"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[18px] font-medium leading-relaxed text-gp-ink marker:content-none sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden">
              <span>{faq.question}</span>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-lg font-normal text-neutral-600 transition group-open:rotate-45 group-open:border-gp-red group-open:text-gp-red" aria-hidden="true">
                +
              </span>
            </summary>
            <p className="max-w-2xl pb-6 pr-10 text-sm leading-[1.9] text-neutral-600 sm:text-[15px]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
