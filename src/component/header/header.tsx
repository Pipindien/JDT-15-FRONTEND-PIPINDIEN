import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navData = [
  { route: "/home", label: "Home" },
  { route: "/about", label: "About" },
  { route: "/contact", label: "Contact" },
];

const Header: React.FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <header className="bg-[#0c0a40] text-white flex justify-between items-center px-10 py-5 w-full max-w-[1440px] mx-auto relative">
      <h2 className="text-lime-300 font-bold italic text-2xl">MiniProject</h2>

      <nav className="hidden md:flex gap-10">
        {navData.map((item) => (
          <a
            key={item.route}
            className="hover:text-gray-300 transition-colors duration-300"
            href={item.route}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <button
        onClick={() => setToggle((prev) => !prev)}
        className="md:hidden"
        aria-label="Toggle navigation menu"
      >
        {toggle ? (
          <XMarkIcon className="h-7 w-7" />
        ) : (
          <Bars3Icon className="h-7 w-7" />
        )}
      </button>

      {toggle && (
        <nav className="absolute top-full left-0 w-full bg-[#0c0a40] flex flex-col items-center gap-4 py-5 md:hidden">
          {navData.map((item) => (
            <a
              key={item.route}
              className="hover:text-gray-300 transition-colors duration-300 py-2 text-lg"
              href={item.route}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
