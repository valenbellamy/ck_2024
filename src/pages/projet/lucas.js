import React, { useRef, useLayoutEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { TERTIARY, GRAY } from "../../constants/constants";

function Lucas() {
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
        <section ref={topEl} className="py-16 px-4 lg:py-36 lg:px-52">
          <h1 className="text-4xl lg:text-5xl font-dmm text-black">
            <span className="text-neutral-600">Lucas </span>France
          </h1>
          <Separator font="mm" color={GRAY} underscore />
          <p className="mt-6 lg:mt-10 mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Equipementier historique de l'automobile. Déclinaison de l'identité
            visuelle pour les Catalogues, promotions, notices, Etiquettes,
            posters, packagings, Newsletters, événementiel et Catalogues.
            Gestion de la base de données des produits.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/lucas-france/LUCAS_1.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              width={400}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_1B.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_2.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_3.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_4.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_5.webp"
              alt="Graphisme pour Lucas France"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/lucas-france/LUCAS_6.webp"
              alt="Graphisme pour Lucas France"
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

export default Lucas;

export const Head = () => <Seo title="Lucas France | Clément Karl" />;
