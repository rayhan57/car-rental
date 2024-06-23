import Link from "next/link";
import React from "react";

const NavItem = ({ title, href, isActive }) => {
  const baseClasses =
    "block border-l-4 md:border-l-0 px-3 py-2 md:px-1 md:py-4";
  const activeClasses =
    "border-l-primary bg-secondary md:border-b-2 md:border-b-primary md:bg-transparent";
  const inactiveClasses =
    "border-l-transparent hover:border-l-gray-300 hover:bg-gray-100 md:hover:border-b-2 md:hover:border-b-gray-300 md:hover:bg-transparent";

  return (
    <li>
      <Link
        href={href}
        className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavItem;
