"use client";
import React, { useState } from "react";
import NavLogo from "./NavLogo";
import ToggleButton from "./ToggleButton";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between py-4 md:py-0">
        <NavLogo />
        <ToggleButton toggleNavbar={toggleNavbar} isOpen={isOpen} />

        <div
          className={`order-3 w-full md:me-8 md:block md:w-auto ${isOpen ? "" : "hidden"}`}
        >
          <ul className="mt-4 flex flex-col space-y-1 font-medium md:mt-0 md:flex-row md:space-x-8 md:space-y-0 md:border-0 md:bg-white md:p-0">
            <NavItem title="Home" href="/" isActive={pathname === "/"} />
            <NavItem
              title="Mobil"
              href="/cars"
              isActive={pathname === "/cars"}
            />
            <NavItem
              title="Customer"
              href="/customers"
              isActive={pathname === "/customers"}
            />
            <NavItem
              title="Sales"
              href="/sales"
              isActive={pathname === "/sales"}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
