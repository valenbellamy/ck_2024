import cx from "classnames";
import {
  WHITE,
  BLUE,
  YELLOW,
  GRAY,
  RED,
  MM,
  DMM,
  DMR,
  PRIMARY,
  SECONDARY,
  TERTIARY,
  MD,
  LG,
  XL,
} from "../constants/constants";

export const colorClassName = (color) =>
  cx({
    "text-white": color === WHITE,
    "text-ck_blue": color === BLUE,
    "text-ck_yellow": color === YELLOW,
    "text-neutral-600": color === GRAY,
    "text-ck_red": color === RED,
  });

export const textClassName = (font) =>
  cx({
    "font-mm": font === MM,
    "font-dmm": font === DMM,
    "font-dmr": font === DMR,
  });

export const projectClassName = (style) =>
  cx({
    "text-white": style === PRIMARY,
    "text-ck_red": [SECONDARY, TERTIARY].includes(style),
  });

export const aboutClassName = (style) =>
  cx({
    "text-ck_blue": [PRIMARY, TERTIARY].includes(style),
    "text-white": style === SECONDARY,
  });

export const navColorClassName = (style) =>
  cx({
    "bg-ck_yellow": [PRIMARY, SECONDARY].includes(style),
    "bg-white": style === TERTIARY,
  });

export const separatorHeaderVariantMap = {
  [PRIMARY]: BLUE,
  [SECONDARY]: RED,
  [TERTIARY]: BLUE,
};

export const separatorClassName = (variant) =>
  cx({
    "text-4xl lg:text-6xl": variant === MD,
    "text-6xl xl:text-8xl mb-6 xl:mb-7": variant === LG,
    "text-6xl lg:text-7xl": variant === XL,
  });
