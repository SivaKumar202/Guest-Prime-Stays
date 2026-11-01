import { ArrowUpRight } from 'lucide-react';
import { buildAirbnbUrl } from '../../utils/airbnbUrl';

export default function PropertyCard({ property, searchCriteria }) {
  const bookingUrl = buildAirbnbUrl(property, searchCriteria);

  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[14px] border border-[#e6e6e6] bg-white">
      <a
        className="relative block h-[250px] overflow-hidden bg-neutral-100"
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${property.name} on Airbnb`}
      >
        <img
          src={property.image}
          alt={property.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span className="absolute left-[15px] top-[15px] rounded-full bg-white px-3 py-2 text-[10px] text-neutral-800 shadow-sm">
          {property.categoryLabel}
        </span>
        <span className="absolute bottom-[15px] right-[15px] grid size-[35px] place-items-center rounded-full bg-white text-neutral-900">
          <ArrowUpRight size={17} />
        </span>
      </a>

      <div className="flex flex-1 flex-col p-6">
        <span className="text-[9px] font-bold tracking-[1.4px] text-[#a10a1f]">
          ATLANTA, GEORGIA
        </span>
        <h3 className="mb-2 mt-[11px] text-[23px] font-medium leading-tight tracking-[-.7px] text-[#171717]">
          {property.name}
        </h3>
        <p className="mb-[18px] text-[11px] text-[#555]">
          {property.capacity} guests · {property.bedrooms} bedrooms · {property.bathrooms} baths
        </p>
        <p className="mb-[18px] text-[13px] leading-[1.75] text-[#777]">
          {property.description}
        </p>
        <div className="mt-auto pb-[22px] text-[10px] leading-[1.8] text-[#555]">
          {property.amenities}
        </div>
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between border-t border-[#ddd] pt-[18px] text-xs font-bold transition-colors hover:text-[#c40924]"
        >
          View availability on Airbnb
          <ArrowUpRight size={15} />
        </a>
      </div>
    </article>
  );
}
