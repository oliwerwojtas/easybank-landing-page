import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState, useEffect } from "react";
import { navLinks } from "../helpers";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="fixed z-10 top-0 w-full bg-white shadow-md">
        <header className="flex items-center justify-between w-full py-1">
          <img src={logo} alt="logo" />
          {windowWidth > 1024 ? (
            <div className="flex justify-around w-3/5">
              <ul className="flex">
                {navLinks.map((link, i) => (
                  <li onClick={() => setOpen(!open)} key={i} className="block ml-2">
                    <a className="text-gray-400 hover:text-gray-600 text-xs" href={link.path}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <span className="ml-auto">xD</span>
            </div>
          ) : (
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-6 h-6 cursor-pointer"
            >
              <img src={open ? close : hamburger} alt="" />
            </button>
          )}

          <ul
            className={`${
              open && windowWidth < 1024
                ? "fixed top-14 left-0.5 block w-11/12 mx-2 mt-2 pb-1 text-center rounded-md bg-white"
                : "hidden"
            }`}
          >
            {navLinks.map((link, i) => (
              <li onClick={() => setOpen(!open)} key={i}>
                <a className="text-gray-400 hover:text-gray-600" href={link.path}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </div>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed z-8 top-0 left-0 w-full h-screen bg-gray-300/80"
        />
      )}
    </>
  );
};
