'use client';

import { MenuIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ScrollLink from '../utils/ScrollLink';

const sections = [
  { name: 'HOME', id: 'inicio' },
  { name: 'INICIAIS', id: 'starters' },
  { name: 'SOBRE', id: 'sobre' },
  { name: 'FORMULARIO', id: 'form' },
];

export default function MobileNavbar({ className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target) || event.target.tagName == 'SPAN') {
        setOpen(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={`${className} bg-grey p-3 fixed top-3 right-3 z-20 rounded-lg hover:scale-[1.04] transition-transform duration-300 shadow-lg`}
      >
        <MenuIcon className="text-white h-6 w-6" />
      </button>

      <div
        ref={ref}
        className={`${
          open ? '' : '-translate-y-[11.25rem]'
        } fixed z-40 bg-grey text-white font-title text-xs w-full flex flex-col items-center gap-5 p-7 shadow-lg transition-transform duration-300`}
      >
        {sections.map((section) => (
          <ScrollLink
            key={section.id}
            sectionId={section.id}
            className="hover:scale-[1.04] transition-transform duration-300 cursor-pointer"
          >
            {section.name}
          </ScrollLink>
        ))}
      </div>

      <div
        className={`${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } fixed z-30 w-full h-screen bg-darkgrey/90 backdrop-blur-sm transition-opacity duration-300`}
      ></div>
    </>
  );
}
