import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  X,
  Menu as MenuIcon,
  User,
  ChevronDown,
} from 'lucide-react';

import Logo from "@/assets/dark-logo.svg?react";

const NAV_LINKS = [
  {
    label: "Our Services",
    key: "services",
    sub: [
      { text: "Multi‑Gig Fiber Internet", href: "/fiber" },
      { text: "Streaming TV", href: "/tv" },
    ],
  },
  {
    label: "About Us",
    key: "about",
    sub: [
      { text: "Who We Are", href: "/who-we-are" },
      { text: "News/Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
    ],
  },
  {
    label: "Where We Serve",
    key: "serve",
    sub: [
      {
        group: "Texas",
        items: [
          { text: "McKinney, TX", href: "/mcKinney" },
          { text: "Arlington, TX", href: "/arlington" },
          { text: "Rockwall, TX", href: "/rockwall" },
        ],
      },
      {
        group: "Arizona",
        items: [{ text: "Phoenix, AZ", href: "/phoenix" }],
      },
    ],
  },
  {
    label: "Support",
    key: "support",
    sub: [
      { text: "Support", href: "/support" },
      { text: "Tech Support", href: "/tech-support" },
      { text: "Construction Prep", href: "/construction-prep" },
      { text: "Installation Prep", href: "/installation-prep" },
    ],
  },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Slide mobile drawer in/out
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    gsap.to(mobileMenuRef.current, {
      x: mobileOpen ? 0 : '100%',
      duration: 0.4,
      ease: mobileOpen ? 'power3.out' : 'power3.in',
      pointerEvents: mobileOpen ? 'auto' : 'none',
    });
  }, [mobileOpen]);

  return (
    <header className="tw-fixed tw-w-full tw-bg-white tw-z-50">
      <div className="tw-max-w-7xl tw-mx-auto tw-flex tw-items-center tw-justify-between tw-px-6 tw-py-6">
        {/* Logo always on left */}
        <a href="/" className="tw-flex-shrink-0">
          <Logo className="tw-h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="tw-hidden lg:tw-flex tw-space-x-8">
          {NAV_LINKS.map(link => (
            <div
              key={link.key}
              className="tw-relative"
              onMouseEnter={() => setActiveDropdown(link.key)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="tw-flex tw-items-end tw-gap-1 tw-text-gray-700 tw-text-sm">
                {link.label}
                <ChevronDown
                  className={`
                    tw-w-4 tw-h-4 tw-transition-transform tw-duration-500
                    ${activeDropdown === link.key ? 'tw-rotate-180' : 'tw-rotate-0'}
                  `}
                />
              </button>
              {activeDropdown === link.key && (
                <div className="
                  tw-absolute tw-top-full tw-left-0 tw-mt-2 tw-w-56
                  tw-bg-white tw-rounded-[25px] tw-backdrop-blur-[50px]
                  tw-border-t-[4px] tw-border-[#3FC9C5]
                  tw-shadow-lg tw-px-4 tw-py-6
                ">
                  {link.sub.map((item, i) =>
                    'group' in item ? (
                      <div key={i} className="tw-mb-4">
                        <div className="
                          tw-font-semibold tw-text-lg tw-text-gray-500
                          tw-uppercase tw-text-center
                        ">
                          {item.group}
                        </div>
                        {item.items.map(s => (
                          <a
                            key={s.text}
                            href={s.href}
                            className="tw-block tw-text-center tw-py-2 tw-text-gray-700"
                          >
                            {s.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        key={item.text}
                        href={item.href}
                        className="tw-block tw-text-center tw-py-2 tw-text-gray-700"
                      >
                        {item.text}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop right */}
        <div className="tw-hidden lg:tw-flex tw-items-center tw-space-x-4">
          <button className="tw-flex tw-items-center tw-space-x-1 tw-text-black">
            <User className="tw-w-5 tw-h-5" />
            <span>Login</span>
          </button>
          <a
            href="/check-availability"
            className="tw-px-4 tw-py-2 tw-bg-black tw-text-white tw-rounded-full"
          >
            Check Availability
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:tw-hidden tw-text-gray-700"
          onClick={() => setMobileOpen(o => !o)}
        >
          {mobileOpen
            ? <X className="tw-w-6 tw-h-6" />
            : <MenuIcon className="tw-w-6 tw-h-6" />
          }
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={mobileMenuRef}
        className="
          tw-fixed tw-top-0 tw-right-0
          tw-h-full tw-w-4/5 tw-max-w-xs
          tw-bg-white tw-border-l tw-border-gray-200
          tw-shadow-lg
          tw-transform tw-translate-x-full
          tw-z-50
        "
      >
        {/* Drawer header with logo & close */}
        <div className="tw-flex tw-items-center tw-justify-between tw-px-6 tw-py-4 tw-border-b tw-border-gray-200">
          <Logo className="tw-h-8 tw-mx-auto" />
          <button onClick={() => setMobileOpen(false)}>
            <X className="tw-w-6 tw-h-6 tw-text-gray-700" />
          </button>
        </div>

        {/* Drawer nav */}
        <nav className="tw-flex-1 tw-overflow-y-auto">
          {NAV_LINKS.map(link => (
            <details key={link.key} className="tw-border-b tw-border-gray-200">
              <summary className="
                tw-px-6 tw-py-4 tw-flex tw-justify-between
                tw-items-center tw-cursor-pointer tw-text-gray-700
                tw-uppercase tw-select-none
              ">
                {link.label}
              </summary>
              <div className="tw-px-8 tw-pb-4">
                {link.sub.map((item, i) =>
                  'group' in item ? (
                    <div key={i} className="tw-mb-4">
                      <div className="
                        tw-font-semibold tw-text-xs tw-text-gray-500
                        tw-uppercase
                      ">
                        {item.group}
                      </div>
                      {item.items.map(s => (
                        <a
                          key={s.text}
                          href={s.href}
                          className="tw-block tw-py-2 tw-text-gray-700"
                        >
                          {s.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      key={item.text}
                      href={item.href}
                      className="tw-block tw-py-3 tw-px-6 tw-text-gray-700"
                    >
                      {item.text}
                    </a>
                  )
                )}
              </div>
            </details>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="tw-px-6 tw-py-6 tw-space-y-3">
          <a
            href="/login"
            className="tw-text-center tw-w-full tw-flex tw-items-center tw-justify-center tw-space-x-2 tw-text-black tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-full"
          >
            <User className="tw-w-5 tw-h-5" />
            <span>Login</span>
          </a>
          <a
            href="/check-availability"
            className="tw-block tw-text-center tw-w-full tw-px-4 tw-py-2 tw-bg-black tw-text-white tw-rounded-full"
          >
            Check Availability
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="tw-fixed tw-inset-0 tw-bg-black tw-bg-opacity-40 tw-z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
