import React from "react";
import Logo from "../../../public/assets/Logo";
import Link from "next/link";

function Footer() {
  let data = new Date().getFullYear();
  return (
    <footer className="footer  border-t border-blue-500 py-12 ">
      <div className="container mx-auto flex justify-between gap-x-10">
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
          <ul>
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
          <ul>
            <li>
              <Link className="footer-links" href="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                LinkedIn
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="footer-links" href="#">
                Discourse
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="text-white text-md font-light inline-block mb-4">
            Legal
          </span>
          <ul>
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
