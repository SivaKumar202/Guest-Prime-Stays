import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="mx-auto flex h-20 max-w-[1720px] items-center justify-between px-5 sm:px-8 lg:h-24 lg:px-10 xl:px-14">
        <a
          href="#home"
          aria-label="Guest Prime Stays home"
          onClick={closeMenu}
          className="relative flex h-[70px] w-[150px] shrink-0 items-center overflow-hidden"
        >
          <img
            src="/images/guest-prime-logo.png"
            alt="Guest Prime Stays"
            className="h-30 w-auto object-contain"
          />
          <span className="sr-only">Guest Prime Stays</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-sm font-medium text-neutral-900 transition-colors duration-200 hover:text-red-600 xl:text-base"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#stays"
            className="group ml-1 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-neutral-200 px-6 py-4 text-sm font-medium text-neutral-900 transition-all duration-300 hover:border-[#dc0c16] hover:bg-[#dc0c16] hover:text-white"
          >
            Find your stay <ArrowUpRight className="ml-1 inline" size={13} />
          </a>
        </nav>

        <button
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-3 text-sm lg:hidden"
        >
          {menuOpen ? "Close" : "Menu"}{" "}
          {menuOpen ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-t border-neutral-100 bg-white px-[5%] py-5 shadow-xl lg:hidden"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between border-b border-neutral-100 py-5 text-base font-medium text-neutral-900 transition-colors hover:text-red-600"
            >
              {item.label}

              <ArrowUpRight
                size={17}
                className="text-neutral-400 hover:text-red-600"
              />
            </a>
          ))}
          <a
            href="#stays"
            onClick={closeMenu}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Find your stay <ArrowUpRight size={17} />
          </a>
        </nav>
      )}
    </header>
  );
}
