import React from 'react'
import {
  MapPin,
  Phone,
  Globe,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
} from 'lucide-react'

import Logo from '@/assets/logo-footer-light.svg?react';

const sections = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Streaming TV', href: '#' },
      { name: 'News/Blog', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Construction Prep', href: '#' },
      { name: 'Installation Prep', href: '#' },
      { name: 'News/Blog', href: '#' },
      { name: 'Text Alerts', href: '#' },
      { name: 'Refer a Friend – Earn $50', href: '#' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'Support', href: '#' },
      { name: 'Tech Support', href: '#' },
    ],
  },
  {
    title: 'My Account',
    links: [{ name: 'Login', href: '#' }],
  },
]

const Footer: React.FC = () => {
  return (
    <footer className="tw-bg-teal-800 tw-text-white">
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-py-10 tw-flex tw-flex-col md:tw-flex-row tw-items-center md:tw-justify-between tw-space-y-6 md:tw-space-y-0">
        <div className="tw-flex tw-flex-col tw-items-center md:tw-items-start tw-space-y-2">
          <Logo className="tw-h-6 md:tw-h-12 lg:tw-h-14 tw-w-auto" />
          <span className="tw-text-sm md:tw-text-2xl tw-tracking-wide tw-font-light tw-text-gray-200">
            Flying Bull Internet Company, LLC
          </span>
        </div>
        <a
          href="#"
          className="tw-inline-block tw-bg-[#2DD0C0] hover:tw-bg-opacity-90 tw-text-[#004F4A] tw-font-medium tw-px-6 tw-py-2 tw-rounded-full tw-transition"
        >
          Check Availability
        </a>
      </div>

      {/* Middle: 4 columns of links */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-8 tw-pb-10">
        {sections.map((sec) => (
          <div key={sec.title}>
            <h4 className="tw-text-base tw-font-semibold tw-underline tw-underline-offset-4 tw-mb-4">
              {sec.title}
            </h4>
            <ul className="tw-space-y-2">
              {sec.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="tw-text-gray-200 hover:tw-text-white tw-transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Contacts + Social */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-flex tw-flex-col md:tw-flex-row tw-items-start md:tw-items-center tw-justify-between tw-space-y-6 md:tw-space-y-0 tw-pb-8 tw-pt-8">
        <div className="tw-flex tw-flex-col sm:tw-flex-row sm:tw-space-x-8 tw-space-y-4 sm:tw-space-y-0">
          <div className="tw-flex tw-items-center tw-space-x-2">
            <MapPin className="tw-h-5 tw-w-5 tw-text-gray-300" />
            <span className="tw-text-gray-200 tw-text-sm">
              3100 Olympus Blvd, Suite 410 Dallas, TX 75019
            </span>
          </div>
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Phone className="tw-h-5 tw-w-5 tw-text-gray-300" />
            <a
              href="tel:1-800-776-6867"
              className="tw-text-gray-200 tw-text-sm hover:tw-text-white tw-transition"
            >
              1‑800‑776‑6867
            </a>
          </div>
          <div className="tw-flex tw-items-center tw-space-x-2">
            <Globe className="tw-h-5 tw-w-5 tw-text-gray-300" />
            <a
              href="mailto:info@novosfiber.com"
              className="tw-text-gray-200 tw-text-sm hover:tw-text-white tw-transition"
            >
              info@novosfiber.com
            </a>
          </div>
        </div>

        <div className="tw-flex tw-space-x-6">
          <a href="#" className="tw-text-gray-300 hover:tw-text-white tw-transition">
            <Instagram className="tw-h-5 tw-w-5" />
          </a>
          <a href="#" className="tw-text-gray-300 hover:tw-text-white tw-transition">
            <Facebook className="tw-h-5 tw-w-5" />
          </a>
          <a href="#" className="tw-text-gray-300 hover:tw-text-white tw-transition">
            <Linkedin className="tw-h-5 tw-w-5" />
          </a>
          <a href="#" className="tw-text-gray-300 hover:tw-text-white tw-transition">
            <Twitter className="tw-h-5 tw-w-5" />
          </a>
        </div>
      </div>

      {/* Bottom: copyright + policy links */}
      <div className="tw-max-w-7xl tw-mx-auto tw-px-6 tw-py-4">
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-justify-between tw-text-gray-400 tw-text-sm tw-space-y-3 md:tw-space-y-0">
          <div>© 2023 – 2025 Flying Bull Internet, LLC. All rights reserved.</div>
          <div className="tw-flex tw-flex-wrap tw-items-center tw-space-x-4">
            <a href="#" className="hover:tw-underline tw-transition">
              NOVOS FiBER Internet Terms & Policies
            </a>
            <a href="#" className="hover:tw-underline tw-transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:tw-underline tw-transition">
              Alert & Messaging Terms
            </a>
            <a href="#" className="hover:tw-underline tw-transition">
              Acceptable Use Policy
            </a>
            <a href="#" className="hover:tw-underline tw-transition">
              Copyright
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
