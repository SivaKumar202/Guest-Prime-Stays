import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Vacation rental services", href: "#owners" },
  { label: "Hotel revenue management", href: "#hotels" },
  { label: "Browse all five stay options", href: "#stays" },
  { label: "Our story", href: "#story" },
  { label: "FAQs", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-gp-ink px-5 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-375 grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-16 lg:py-16">
        <div>
          <a
            href=""
            className="inline-block text-lg font-bold tracking-[0.08em]"
          >
            <img
            src="/images/logocopy.png"
            alt="Guest Prime Stays"
            className="h-20 w-auto bg-white rounded-2xl"
          />
          </a>
          <p className="mt-3 text-lg text-white/90">
            Thoughtful stays. Memorable moments.
          </p>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm text-white">
          <a
            className="transition hover:text-white/70 text-lg"
            href="mailto:info@guestprimestays.com"
          >
            info@guestprimestays.com
          </a>
          <a className="transition hover:text-white/70" href="tel:+12405545254 text-lg">
            +1 (240) 554 5254
          </a>
          <span className="text-white text-lg  hover:text-white">Atlanta, Georgia</span>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-start gap-3 text-lg text-white"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 transition hover:text-white/70"
            >
              {link.label} <ArrowUpRight size={12} />
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto w-full max-w-375 px-5 py-5 text-center text-lg text-white/50 sm:px-8 sm:py-6 md:px-10 lg:px-12">
        <span>© {new Date().getFullYear()} Guest Prime Stays</span>
      </div>
    </footer>
  );
}
