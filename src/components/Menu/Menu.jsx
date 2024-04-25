import React from "react";
import Link from "next/link";

function Menu() {
  return (
    <ul className="flex gap-x-12">
      <li className="text-white text-md">
        <Link href="#">About us</Link>
      </li>
      <li className="text-white text-md">
        <Link href="#">Services</Link>
      </li>
      <li className="text-white text-md">
        <Link href="#">Why DevOptima </Link>
      </li>
    </ul>
  );
}

export default Menu;
