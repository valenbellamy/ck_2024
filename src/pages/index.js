import React, { useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Project from "../components/Project";
import Separator from "../components/Separator";
import { Seo } from "../components/Seo";
import { PRIMARY, WHITE, BLUE, YELLOW, XL } from "../constants/constants";
import { gsap } from "gsap";
import cx from "classnames";

const IndexPage = () => {
  const imagesEl = useRef(null);
  const [triggerAnim, setTriggerAnim] = useState(false);

  useLayoutEffect(() => {
    setTriggerAnim(true);
    gsap.to(imagesEl.current, {
      alpha: 1,
      duration: 0.6,
      ease: "power3.inout",
    });
  }, []);
  return (
    <Layout headerStyle={PRIMARY}>
      <>
        <div className="w-full xl:w-10/12 2xl:w-9/12 p-4 xl:p-0 mx-auto">
          <div className="w-32 md:w-40 mb-36 lg:mb-52 mx-auto -mt-6">
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 317.55 800"
              className={cx("logo", { "--anim": triggerAnim })}
            >
              <path className="path1" d="M164.41,439.41l118.37,119.94" />
              <path className="path2" d="M245.73,357.23L141.52,462.84v323.13" />
              <path
                className="path3"
                d="M90.6,425.15
	c-28.12,0-50.92,23.11-50.92,51.61c0,28.5,22.8,51.61,50.92,51.61c28.12,0,50.92-23.11,50.92-51.61V9.77"
              />
            </svg>
          </div>
          <div
            className="flex flex-col md:flex-row mb-60 opacity-0"
            ref={imagesEl}
          >
            <div className="w-full xl:w-half-minus-2.5 md:mr-2 xl:mr-7">
              <div className="mb-4 xl:mb-14">
                <Project
                  title={
                    <>
                      lucas<br></br>france
                    </>
                  }
                  to={"/projet/lucas"}
                  color={WHITE}
                >
                  <StaticImage
                    src="../images/home/1_LUCAS_FRANCE.webp"
                    alt="Couverture du projet Lucas France"
                    layout="constrained"
                  />
                </Project>
              </div>
              <div className="mb-4 xl:mb-14">
                <Project
                  title={
                    <>
                      energie<br></br>consulting
                    </>
                  }
                  to={"/projet/energie"}
                  color={WHITE}
                >
                  <StaticImage
                    src="../images/home/4_ENERGIE_CONSULTING.webp"
                    alt="Couverture du projet énergie & consulting"
                    layout="constrained"
                  />
                </Project>
              </div>
              <div className="mb-4 xl:mb-14 bg-white p-4 xl:p-14 flex">
                <div className="hidden md:block w-3 xl:w-6 bg-ck_blue mr-6 xl:mr-14"></div>
                <div>
                  <h2 className="text-ck_blue ts-xl">Contact</h2>
                  <Separator
                    color={BLUE}
                    variant={XL}
                    underscore
                    className="mb-4 xl:mb-7"
                  />
                  <h3 className="text-ck_blue text-xl lg:text-2xl font-dmm">
                    clementlement@gmail.com
                  </h3>
                  <span className="hidden text-ck_red"></span>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-half-minus-2.5 md:ml-2 xl:ml-7">
              <div className="mb-4 xl:mb-14">
                <Project
                  title={
                    <>
                      jeux<br></br>illustrations
                    </>
                  }
                  to={"/projet/jeux"}
                  color={WHITE}
                >
                  <StaticImage
                    src="../images/home/2_JEUX_DE_CARTES_ILLUSTRATIONS_2.webp"
                    alt="Couverture du projet jeux de cartes & illustrations"
                    layout="constrained"
                  />
                </Project>
              </div>
              <div className="mb-4 xl:mb-14">
                <Project
                  title={
                    <>
                      heineken<br></br>fischer
                    </>
                  }
                  to={"/projet/heineken"}
                  color={YELLOW}
                >
                  <StaticImage
                    src="../images/home/3_HEINEKEN_FISCHER.webp"
                    alt="Couverture du projet Heineken & FIscher"
                    layout="constrained"
                  />
                </Project>
              </div>

              <div className="mb-4 xl:mb-14">
                <Project
                  title={<>tourisme</>}
                  to={"/projet/tourisme"}
                  color={WHITE}
                >
                  <StaticImage
                    src="../images/home/5_TOURISME.webp"
                    alt="Couverture du projet tourisme"
                    layout="constrained"
                  />
                </Project>
              </div>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Accueil | Clément Karl" />;
