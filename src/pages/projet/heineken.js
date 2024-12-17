import React, { useRef, useLayoutEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { TERTIARY, GRAY } from "../../constants/constants";

function Heineken() {
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
            Heineken & Fischer
          </h1>
          <Separator font="mm" color={GRAY} underscore />
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            CONCOURS DE BIEROLOGIE
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Création d'identité visuelle pour le concours de biérologie ayant
            lieu dans toute la France. <br></br>Déclinaison pour les différents
            évènements ayant lieu tout au long de l'année : <br></br>Concours et
            remise des prix. <br></br>Menu pour une réception aux champs Elysées
            après la remise des prix. <br></br>Guide et emploi du temps pour une
            visite de houblonnières avec les ambassadeurs Heineken.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/heineken/Heineken_1.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/heineken/Heineken_2.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/heineken/Heineken_3.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/heineken/Heineken_4.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            FISCHERSTUB
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Concours d'architecture pour la modernisation de la Fischer stub,
            restaurant historique de la marque de bière à Strasbourg. Croquis
            des lieux et portraits des membres de la direction de Fischer. Plans
            des lieux et présentation du concours aux participants.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/heineken/Heineken_5.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/heineken/Heineken_6.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/heineken/Heineken_7.webp"
              alt="Graphisme par Clément Karl"
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

export default Heineken;

export const Head = () => <Seo title="Heineken & Fischer | Clément Karl" />;
