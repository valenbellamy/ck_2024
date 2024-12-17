import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/DMSans-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="DMM"
    />,
    <link
      rel="preload"
      href="/fonts/DMSans-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="DMR"
    />,
    <link
      rel="preload"
      href="/fonts/MinioPro-it.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="MI"
    />,
    <link
      rel="preload"
      href="/fonts/MinionPro-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="MM"
    />,
  ]);
};
