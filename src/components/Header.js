import React, { useRef, useLayoutEffect, useState } from "react";
import { Link } from "gatsby";
import { string } from "prop-types";
import Separator from "../components/Separator";
import {
  projectClassName,
  aboutClassName,
  separatorHeaderVariantMap,
  navColorClassName,
} from "../helpers/className";
import { PRIMARY, XL } from "../constants/constants";
import { gsap } from "gsap";

const Header = ({ headerStyle }) => {
  const [open, setOpen] = useState(false);
  const projectClass = projectClassName(headerStyle);
  const aboutClass = aboutClassName(headerStyle);
  const navColorClass = navColorClassName(headerStyle);

  const headerEl = useRef(null);

  useLayoutEffect(() => {
    gsap.from(headerEl.current, {
      alpha: 0,
      duration: 0.4,
      ease: "power3.inout",
    });
  }, []);

  return (
    <header
      className="fixed top-10 right-4 xl:right-12 z-20 text-right"
      ref={headerEl}
    >
      <button
        className="lg:hidden w-10 h-8 relative z-30 bg-ck_red"
        type="button"
        aria-expanded="false"
        aria-label="Ouvrir le menu"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`w-5 h-0.5 bg-white absolute left-2.5 transition-all duration-150 ${
            open ? "top-4" : "top-2.5 "
          }`}
        ></span>
        <span
          className={`w-5 h-0.5 bg-white absolute left-2.5 transition-all duration-150 ${
            open ? "bottom-4" : "bottom-2.5 "
          }`}
        ></span>
      </button>
      <nav
        className={` fixed top-0 left-0 w-full h-full px-4 py-20 ${navColorClass} transition-duration-700 transition-transform ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block lg:w-auto lg:h-auto lg:relative lg:bg-transparent lg:p-0`}
      >
        <Separator
          color={separatorHeaderVariantMap[headerStyle]}
          underscore
          variant={XL}
          className="mb-4 xl:mb-7"
        />
        <ul>
          <li className="mb-4">
            <Link
              to="/"
              type="button"
              className={`${projectClass} font-dmm text-4xl lg:text-5xl`}
            >
              Projets
            </Link>
          </li>
          <li>
            <Link
              type="button"
              to="/a-propos"
              className={`${aboutClass} font-dmm text-4xl lg:text-5xl`}
            >
              A propos
            </Link>
          </li>
        </ul>
        <Separator
          color={separatorHeaderVariantMap[headerStyle]}
          underscore
          variant={XL}
          className="mb-4 xl:mb-7"
        />
      </nav>
    </header>
  );
};

Header.propTypes = {
  headerStyle: string,
};

Header.defaultProps = {
  headerStyle: PRIMARY,
};

export default Header;
