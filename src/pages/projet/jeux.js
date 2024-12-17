import React, { useRef, useLayoutEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { TERTIARY, GRAY } from "../../constants/constants";

function Jeux() {
  const topEl = useRef(null);

  useLayoutEffect(() => {
    gsap.from(topEl.current, {
      y: 300,
      alpha: 0,
      skewY: 15,
      duration: 0.6,
      ease: "power3.inout",
    });
  }, []);
  return (
    <Layout headerStyle={TERTIARY}>
      <div className="bg-white">
        <section ref={topEl} className="py-16 px-4 lg:py-24 lg:px-52">
          <h1 className="text-4xl lg:text-5xl font-dmm text-black">
            Jeux de cartes & illustrations
          </h1>
          <Separator font="mm" color={GRAY} underscore />
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            WARAK{" "}
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Jeu de cartes basé sur le "Gwent", apparu dans la licence The
            witcher.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/jeux/Jeu_1.webp"
              alt="Jeu de cartes par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/jeux/Jeu_2.webp"
              alt="Jeu de cartes par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            LA SOUTERRAINE{" "}
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Jeu de cartes classique sur le thème de l'univers des catacombes de
            Paris.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/jeux/Jeu_3.webp"
              alt="Jeu de cartes par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/jeux/Jeu_4.webp"
              alt="Jeu de cartes par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            LABORATOIRE{" "}
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Magazine traitent des extra-terrestres dans la culture populaire.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/jeux/Jeu_5.webp"
              alt="Illustration par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/jeux/Jeu_6.webp"
              alt="Illustration par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            VERTICAL{" "}
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Livre d'illustrations sur le vertige en montagne.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/jeux/Jeu_7.webp"
              alt="Illustration par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Jeux;

export const Head = () => (
  <Seo title="Jeux de cartes & illustrations | Clément Karl" />
);
