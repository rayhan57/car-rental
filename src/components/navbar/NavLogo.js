import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "/public/img/logo.svg";

const NavLogo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const logoText = (
    <span className="self-center whitespace-nowrap text-2xl font-semibold">
      Car Rental
    </span>
  );

  const logoImage = (
    <Image src={logo} className="w-16" alt={"Car Rental Logo"} />
  );

  const logoContent = isMobile ? (
    <>
      {logoText}
      {logoImage}
    </>
  ) : (
    <>
      {logoImage}
      {logoText}
    </>
  );

  return (
    <Link href="/" className="order-2 me-4 flex items-center space-x-3 md:ms-8">
      {logoContent}
    </Link>
  );
};

export default NavLogo;
