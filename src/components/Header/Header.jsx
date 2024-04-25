import React from "react";
import Menu from "@/components/Menu/Menu";
import Logo from "../../../public/assets/Logo";
import Button from "@/components/Button/Button";

function Header() {
  return (
    <header className="header flex justify-between items-center py-4">
      <Logo />
      <Menu />
      <Button name="Get started" bg="bg-blue-300" p="px-12 py-4" />
    </header>
  );
}

export default Header;
