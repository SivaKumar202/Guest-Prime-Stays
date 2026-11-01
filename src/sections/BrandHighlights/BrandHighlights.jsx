import { ArrowUpRight } from 'lucide-react';

const highlights = ['Atlanta, your way', 'Homes with character', 'Room to come together'];

export default function BrandHighlights() {
  return (
    <section className="border-b border-neutral-200 bg-white px-[6%] py-7">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs sm:gap-x-8">
          {highlights.map((item, index) => <div key={item} className="flex items-center gap-7 sm:gap-8 text-base"><span>{item}</span>{index < highlights.length - 1 && <i aria-hidden="true" className="h-1 w-1 rounded-full bg-gp-red" />}</div>)}
        </div>
        <a href="#owners" className="inline-flex w-fit items-center gap-1 text-base text-neutral-500 transition hover:text-gp-red">Own a property? Partner with us <ArrowUpRight size={12} /></a>
      </div>
    </section>
  );
}
