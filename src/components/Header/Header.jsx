import React from "react";
import Menu from "@/components/Menu/Menu";
import Logo from "../../../public/assets/Logo";
import Button from "@/components/Button/Button";

function Header() {
  return (
    <header className="header py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <Menu />
        <Button
          classStyle="hover:bg-blue-300 duration-150 ease-in"
          name="Get started"
          bg="bg-blue-400"
          p="px-12 py-4"
        />
      </div>
    </header>
  );
}

export default Header;
