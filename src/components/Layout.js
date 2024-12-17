import React from "react";
import { node, string } from "prop-types";
import Header from "./Header";
import { motion } from "framer-motion";
import { useLocation } from "@reach/router";
import "../static/fonts/fonts.css";

const Layout = ({ children, headerStyle, transitionStatus }) => {
  const location = useLocation();

  return (
    <>
      <Header headerStyle={headerStyle} transitionStatus={transitionStatus} />
      <motion.div
        initial={{ scaleY: 0 }} // Initial scale based on state
        animate={{ scaleY: 0 }} // Always scale up on entry
        exit={{ scaleY: 1 }} // Scale down on exit if exiting
        transition={{
          duration: 0.7,
          ease: [0.645, 0.045, 0.355, 1],
        }}
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          transformOrigin: "center bottom",
          zIndex: 100,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#e9496f",
        }}
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }} // Initial scale based on state
        animate={{ scaleY: 0 }} // Always scale up on entry
        exit={{ scaleY: 1 }} // Scale down on exit if exiting
        transition={{
          duration: 0.7,
          ease: [0.645, 0.045, 0.355, 1],
          delay: 0.1,
        }}
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          transformOrigin: "center bottom",
          zIndex: 100,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#083a4b",
        }}
      ></motion.div>
      <motion.div
        initial={{ scaleY: 0 }} // Initial scale based on state
        animate={{ scaleY: 0 }} // Always scale up on entry
        exit={{ scaleY: 1 }} // Scale down on exit if exiting
        transition={{
          duration: 0.7,
          ease: [0.645, 0.045, 0.355, 1],
          delay: 0.2,
        }}
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          transformOrigin: "center bottom",
          zIndex: 100,
          width: "100vw",
          height: "100vh",
          backgroundColor: ["/", "/a-propos/"].includes(location.pathname)
            ? "#fed169"
            : "#ffffff",
        }}
      ></motion.div>
      <div>
        <main>{children}</main>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  headerStyle: string.isRequired,
};

export default Layout;
