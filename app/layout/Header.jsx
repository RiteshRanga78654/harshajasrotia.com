"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 backdrop-blur-2xl left-0 w-full z-50">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8">
        <div className="mt-3 mb-3 rounded-2xl bg-[#b3b3b3]/80 backdrop-blur-xl border border-[#4c4949] shadow-lg">
          <div className="flex items-center justify-between h-16 px-6">

            {/* Brand */}
            <Link
              href="/"
              className="text-lg md:text-xl font-semibold tracking-wide text-[#f4f4f4]"
            >
              Harsha Jasrotia
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-10">
              <NavItem href="/" label="Home" />
              <NavItem href="/testimonials" label="Testimonials" />
              <NavItem href="/the-journey" label="The Journey" />
              {/* <NavItem href="/strategic-insights" label="Strategic Insights" /> */}
              <NavItem href="/events-speaking" label="Events & Speaking" />
              <NavItem href="/media-gallery" label="Media & Gallery" />
              <NavItem href="/contact" label="Contact" />
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-[#cc0000]"
            >
              <div className="space-y-1.5">
                <span className="block w-6 h-[2px] bg-[#cc0000]" />
                <span className="block w-6 h-[2px] bg-[#cc0000]" />
                <span className="block w-6 h-[2px] bg-[#cc0000]" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-3 rounded-2xl bg-[#1e1e1e] border border-[#4c4949] shadow-xl">
            <nav className="flex flex-col px-6 py-6 space-y-5">
              <MobileItem label="Home" href="/" setOpen={setOpen} />
              <MobileItem label="Testimonials" href="/testimonials" setOpen={setOpen} />
              <MobileItem label="The Journey" href="/journey" setOpen={setOpen} />
              <MobileItem label="Strategic Insights" href="/strategic-insights" setOpen={setOpen} />
              <MobileItem label="Events & Speaking" href="/events-speaking" setOpen={setOpen} />
              <MobileItem label="Media & Gallery" href="/media-gallery" setOpen={setOpen} />
              <MobileItem label="Contact" href="/contact" setOpen={setOpen} />
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* -------- Desktop Nav Item -------- */
function NavItem({ href, label }) {
  return (
    <Link
      href={href}
      className="relative text-sm font-medium text-[#222222] hover:text-[#cc0000] transition-colors
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#cc0000]
      after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </Link>
  );
}

/* -------- Mobile Nav Item -------- */
function MobileItem({ href, label, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-base font-medium text-[#cfcfcf] hover:text-[#cc0000] transition-colors"
    >
      {label}
    </Link>
  );
}
