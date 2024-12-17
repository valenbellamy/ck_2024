import React from "react";
import { oneOf, bool, string } from "prop-types";
import {
  textClassName,
  colorClassName,
  separatorClassName,
} from "../helpers/className";
import {
  WHITE,
  BLUE,
  YELLOW,
  RED,
  MM,
  DMM,
  MD,
  LG,
  XL,
} from "../constants/constants";

function Separator({ color, font, variant, underscore, className }) {
  const textColorClass = colorClassName(color);
  const textClass = textClassName(font);
  const separatorClass = separatorClassName(variant);

  return (
    <div
      className={`inline-block ${separatorClass} ${textColorClass} ${textClass} ${className}`}
    >
      {underscore ? "_" : "-"}
    </div>
  );
}

Separator.propTypes = {
  color: oneOf([WHITE, BLUE, YELLOW, RED]).isRequired,
  font: oneOf([MM, DMM]),
  variant: oneOf([MD, LG, XL]),
  underscore: bool,
  className: string,
};

Separator.defaultProps = {
  font: DMM,
  variant: MD,
  underscore: false,
  className: "",
};

export default Separator;
