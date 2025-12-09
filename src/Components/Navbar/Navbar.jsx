import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 relative transition-all">
        <a href="#" className="text-2xl font-bold">
          <h2>CS — Ticket System</h2>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-8">
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>

          <button className="cursor-pointer px-4 py-3 bg-linear-to-bl from-[#9F62F2] to-[#632EE3] transition text-white rounded-xl">
            + New Ticket
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="sm:hidden"
        >
          {/* Menu Icon SVG */}
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#426287" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
            <rect
              x="6"
              y="13"
              width="15"
              height="1.5"
              rx=".75"
              fill="#426287"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden z-50`}
        >
          <a href="#">Home</a>
          <a href="#">FAQ</a>
          <a href="#">Changelog</a>
          <a href="#">Blog</a>
          <a href="#">Download</a>
          <a href="#">Contact</a>
          <button className="cursor-pointer px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
            + New Ticket
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
