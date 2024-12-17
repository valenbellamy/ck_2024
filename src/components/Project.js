import React from "react";
import { Link } from "gatsby";
import { string, node, oneOf } from "prop-types";
import { colorClassName } from "../helpers/className";
import { WHITE, YELLOW, BLUE } from "../constants/constants";

function Project({ title, children, to, color }) {
  const textColorClassName = colorClassName(color);

  return (
    <Link className="relative block w-full" to={to} title="Voir le projet">
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
        <div
          className={`inline-block text-3xl font-dmr ${textColorClassName}`}
          aria-hidden="true"
        >
          -
        </div>
        <h2 className={`text-2xl font-dmr uppercase ${textColorClassName}`}>
          {title}
        </h2>
      </div>
      {children || <div className="text-white">Image is missing</div>}
    </Link>
  );
}

Project.propTypes = {
  title: node.isRequired,
  to: string.isRequired,
  children: node.isRequired,
  color: oneOf([WHITE, BLUE, YELLOW]).isRequired,
};

export default Project;
