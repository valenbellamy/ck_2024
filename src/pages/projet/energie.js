import React, { useRef, useLayoutEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import Separator from "../../components/Separator";
import Layout from "../../components/Layout";
import { Seo } from "../../components/Seo";
import { TERTIARY, GRAY } from "../../constants/constants";

function Energie() {
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
            Energie & consulting
          </h1>
          <Separator font="mm" color={GRAY} underscore />
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            N20
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Congrès bilatéral France/ Japon sur la sécurité nucléaire. Création
            du logo et de l’identité visuelle. Déclinaison en supports imprimés.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/energie/EN_1.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/energie/EN_2.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/energie/EN_3.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/energie/EN_4.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            LOGOS
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Exirys - Agence de communication spécialisée dans l'énergie.
            <br></br>
            Homelette - Site d'hébergement en maison d'hôtes.<br></br>
            AMMA Conseil - Consultant en bien être au travail.<br></br>
            Cynetic - Consultant en gestion d'entreprise.<br></br>
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/energie/EN_5.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            NEXEN
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Agence de consultants en IT pour les grandes entreprises. Création
            de l’identité visuelle et déclinaison en supports imprimés.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/energie/EN_6.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
            <StaticImage
              src="../../images/energie/EN_7.webp"
              alt="Graphisme par Clément Karl"
              layout="constrained"
              quality={100}
              className="mb-4 lg:mb-16"
            />
          </div>
          <h2 className="font-dmm text-2xl lg:text-3xl mt-6 lg:mt-10 text-black">
            LA COURSE AUX ELECTRONS
          </h2>
          <div
            className="inline-block text-2xl lg:text-3xl font-dmr text-black"
            aria-hidden="true"
          >
            -
          </div>
          <p className="mb-4 lg:mb-16 text-2xl lg:text-3xl text-neutral-400 font-mm">
            Jeu de l'oie géant destiné aux enfants dans les centres d'accueil du
            public au sein des centrales EDF.
          </p>
          <div className="lg:px-20 mx-auto text-center">
            <StaticImage
              src="../../images/energie/EN_9.webp"
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

export default Energie;

export const Head = () => <Seo title="Energie & consulting | Clément Karl" />;
