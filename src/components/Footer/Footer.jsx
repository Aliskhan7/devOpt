import React from "react";
import Logo from "../../../public/assets/Logo";
import Link from "next/link";
import Twitter from "../../../public/assets/images/Icons/twitter";
import Linkedin from "../../../public/assets/images/Icons/linkedin";
import Github from "../../../public/assets/images/Icons/github";
import Discourse from "../../../public/assets/images/Icons/Discourse";

function Footer() {
  let data = new Date().getFullYear();
  return (
    <footer className="footer  border-t border-blue-500 py-12 ">
      <div className="container mx-auto flex justify-between gap-x-44">
        <div>
          <Logo />
          <span className="mt-36 inline-block text-white text-md font-thin">
            Devoptima {data} © All rights reserved
          </span>
        </div>
        <div className="ml-auto">
          <span className="text-white text-md font-light inline-block mb-4">
            Resources
          </span>
          <ul className="flex flex-col gap-y-3">
            <li>
              <Link className="footer-links" href="#">
                Docs
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                Release notes
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                Security
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-white text-md font-light inline-block mb-4">
            Community
          </span>
          <ul className="flex flex-col gap-y-3">
            <li>
              <Link
                className="flex gap-x-2 items-center footer-links social-link"
                href="#"
              >
                <Twitter />
                Twitter
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-x-2 items-center footer-links social-link"
                href="#"
              >
                <Linkedin />
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-x-2 items-center footer-links social-link"
                href="#"
              >
                <Github />
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-x-2 items-center footer-links social-link"
                href="#"
              >
                <Discourse />
                Discourse
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-white text-md font-light inline-block mb-4">
            Legal
          </span>
          <ul className="flex flex-col gap-y-3">
            <li>
              <Link className="footer-links" href="#">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
