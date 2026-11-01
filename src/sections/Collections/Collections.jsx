import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import PropertyCard from "../../components/ui/PropertyCard";
import { collectionFilters, properties } from "../../data/properties";

export default function Collections({ searchCriteria, onResetSearch }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesCategory =
        activeFilter === "all" || property.category === activeFilter;
      const matchesCapacity =
        !searchCriteria?.submitted ||
        property.capacity >= Number(searchCriteria.guests || 1);
      return matchesCategory && matchesCapacity;
    });
  }, [activeFilter, searchCriteria]);

  const hasSearch = Boolean(searchCriteria?.submitted);
  const count = visibleProperties.length;
  const resultText = `${count} stay option${count === 1 ? "" : "s"}${hasSearch ? ` for ${searchCriteria.guests} guests` : ""} · ${searchCriteria?.checkIn && searchCriteria?.checkOut ? "Dates carried through to Airbnb; confirm availability there." : "Choose dates on Airbnb for current rates."}`;

  function resetCollection() {
    setActiveFilter("all");
    onResetSearch?.();
  }

  return (
    <section
      id="stays"
      className="mx-auto w-full max-w-360 px-5 pb-8 pt-10 sm:px-8 sm:pb-8 sm:pt-12 md:px-1 lg:px-[1%] lg:pb-8 lg:pt-16 xl:px-1"
    >
      <div className="mb-9 flex flex-col justify-between gap-5 md:mb-11.25 md:flex-row md:items-end md:gap-12">
        <div>
          <span className="mb-4 block text-sm font-bold uppercase tracking-[1.7px] text-[#a10a1f]">
            Our Atlanta collection
          </span>
          <h2 className="m-0 text-[clamp(35px,3.7vw,56px)] font-medium leading-[1.08] tracking-[-2px] text-gp-ink">
            Different stays.
            <br />
            The same invitation: settle in.
          </h2>
        </div>
        <p className="mb-1 max-w-100 text-lg leading-[1.8] text-[#666]">
          A poolside villa, a welcoming cottage or a quiet rooftop retreat.
          Choose the space that feels right for your people and your plans.
        </p>
      </div>

      <div
        className="mb-5.5 mt-8.75 flex flex-wrap gap-2.5"
        role="group"
        aria-label="Filter stay types"
      >
        {collectionFilters.map((filter) => {
          const selected = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-4.75 py-3 text-xs transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-gp-red ${selected ? "border-gp-ink bg-gp-ink text-white" : "border-[#ddd] bg-white text-gp-ink hover:border-gp-ink"}`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p
        id="search-status"
        role="status"
        aria-live="polite"
        className="mb-6.25 text-base leading-[1.7] text-[#777]"
      >
        {hasSearch
          ? resultText
          : "5 stay options · Choose your dates on Airbnb for current rates."}
      </p>

      {count > 0 ? (
        <div className="grid grid-cols-1 gap-x-6.25 gap-y-8.75 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              searchCriteria={searchCriteria}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl bg-[#f5f5f5] p-8 sm:p-8.75">
          <span className="mb-3 block text-[10px] font-bold uppercase tracking-[1.6px] text-[#a10a1f]">
            Your trip, your way
          </span>
          <h3 className="mb-4 text-3xl font-medium tracking-[-1px] sm:text-4xl">
            Let's find the right fit.
          </h3>
          <p className="mb-6 max-w-xl text-sm leading-[1.8] text-[#666]">
            No stay in this category fits your selected group size. Try another
            category or contact us to discuss your group.
          </p>
          <button
            type="button"
            onClick={resetCollection}
            className="inline-flex items-center gap-2 rounded-full border border-[#ddd] bg-white px-5 py-3 text-xs font-semibold transition hover:border-[#171717]"
          >
            Show all stay options <ArrowUpRight size={14} />
          </button>
        </div>
      )}

      <p className="mt-6.25 text-base leading-[1.8] text-[#888]">
        The two-home getaway combines Berkeley Cottage and Urban Nature Retreat;
        it is not an additional separate property. Reservations are completed on
        Airbnb.
      </p>
    </section>
  );
}
