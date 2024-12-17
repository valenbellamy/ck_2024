import React, { useRef, useLayoutEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { TERTIARY, GRAY } from "../../constants/constants";

function Tourisme() {
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
            <span className="text-neutral-600">Meti </span>Cottage
          </h1>
          <Separator font="mm" color={GRAY} underscore />
          <p className="mt-6 lg:mt-10 mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Hotel d'éco-tourisme situé près de Tobelo dans les molluques du nord
            en Indonésie. Création de l'identité visuelle de l'établissement et
            diffusion sur les réseaux sociaux. Création d'un guide de visite.
          </p>
          <div className="mx-auto lg:px-20 text-center">
            <StaticImage
              src="../../images/tourisme/Tourisme_1.webp"
              alt="Graphisme pour Meti Cottage"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/tourisme/Tourisme_2.webp"
              alt="Graphisme pour Meti Cottage"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/tourisme/Tourisme_3.webp"
              alt="Graphisme pour Meti Cottage"
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

export default Tourisme;

export const Head = () => <Seo title="Meti Cottage | Clément Karl" />;
