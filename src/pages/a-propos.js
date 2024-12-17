import React, { useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Separator from "../components/Separator";
import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";
import { SECONDARY, WHITE, BLUE, YELLOW } from "../constants/constants";
import { gsap } from "gsap";

function AProposPage() {
  const textEl = useRef(null);
  const sep1El = useRef(null);
  const sep2El = useRef(null);
  const sectionEl = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.from(textEl.current, {
      y: 250,
      skewY: 15,
      alpha: 0,
      duration: 0.6,
      ease: "power3.inout",
    })
      .from(sep1El.current, { scaleX: 0, duration: 0.4, ease: "power3.inout" })
      .from(
        sep2El.current,
        { scaleX: 0, duration: 0.4, ease: "power3.inout" },
        "<"
      )
      .from(sectionEl.current, { alpha: 0, duration: 0.4 }, "<");
  }, []);
  return (
    <>
      <Layout headerStyle={SECONDARY}>
        <section className="py-16 px-4 lg:py-24 lg:px-52 bg-ck_yellow">
          <div className="lg:w-1/2">
            <div
              ref={sep1El}
              className="inline-block text-6xl xl:text-8xl mb-8 xl:mb-10 text-ck_blue font-mm origin-right"
            >
              _
            </div>
            <p ref={textEl} className="text-ck_blue font-mm text-2xl">
              Bonjour ! Je suis graphiste de formation et travaille actuellement
              en tant que Responsable de la communication chez Lucas France,
              Equipementier historique de l'automobile.
            </p>
            <div
              ref={sep2El}
              className="inline-block text-6xl xl:text-8xl -mt-4 xl:-mt-14 text-ck_blue font-mm origin-left"
            >
              _
            </div>
          </div>
        </section>
        <section
          ref={sectionEl}
          className="pt-6 px-4 lg:pt-24 lg:px-52 bg-ck_blue flex flex-wrap"
        >
          <div className="mb-6 md:mb-0 lg:w-1/2 text-xl">
            <h3 className="text-ck_yellow font-dmr text-3xl">Carrière</h3>
            <Separator color={YELLOW} font="dmr" />
            <div className="font-mm text-ck_yellow mb-4">
              Responsable marketing et com{" "}
              <span className="text-white">Lucas France</span>
              <br></br>
              <span className="font-mi text-ck_yellow">
                Septembre 2020 {">"} Aujourd’hui
              </span>
            </div>
            <div className="font-mm text-ck_yellow mb-4">
              Graphiste indépendant{" "}
              <span className="text-white">CK Design</span>
              <br></br>
              <span className="font-mi text-ck_yellow">
                Novembre 2018 {">"} Septembre 2020
              </span>
            </div>
            <div className="font-mm text-ck_yellow mb-4">
              Graphiste Exécutant{" "}
              <span className="text-white">Agence Exirys</span>
              <br></br>
              <span className="font-mi text-ck_yellow">
                Août 2015 - Août 2017
              </span>
            </div>
            <div className="text font-mm text-white">
              Portraitiste
              <br></br>
              <span className="font-mignon-italic text-ck_yellow">
                Juin 2014 - Juillet 2015
              </span>
            </div>
          </div>
          <div className="mb-6 md:mb-0 lg:w-1/2 text-xl">
            <h3 className="text-white font-dmr text-3xl">Formation</h3>
            <Separator color={WHITE} font="dmr" />
            <div className="text font-mm text-white mb-2">
              Concepteur en communication visuelle{" "}
              <span className="text-ck_yellow">E.S.A.T</span>
              <br></br>
              <span className="font-mi text-white">2009 - 2012</span>
            </div>
            <div className="text font-mm text-white mb-2">
              Prépa <span className="text-ck_yellow">Ateliers de Sèvres</span>
              <br></br>
              <span className="font-mi text-white">2008 - 2009</span>
            </div>
            <div className="text font-mm text-white">
              MANAA publique{" "}
              <span className="text-ck_yellow">Institut Ste. Geneviève</span>
              <br></br>
              <span className="font-mi text-white">2007 - 2008</span>
            </div>
          </div>
        </section>
        <section className="lg:pt-16 bg-ck_blue flex flex-wrap">
          <div className="mb-6 md:mb-0 lg:w-1/2 px-4 lg:px-52 text-xl self-center">
            <h3 className="text-white font-dmr text-3xl">Parenthèse</h3>
            <Separator color={WHITE} font="dmr" />
            <div className="font-mm text-white">
              Voyage autour du monde sans avion <br></br>
              <span className="font-mi text-white">
                Septembre 2017 {">"} Septembre 2018
              </span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <StaticImage
              src="../images/about/About_3.jpg"
              alt="Voyage autour du monde de Clément Karl"
              layout="constrained"
            />
          </div>
        </section>
        <section className="px-4 py-6 lg:py-24 lg:px-52 bg-ck_yellow flex flex-wrap">
          <div className="mb-6 md:mb-0 lg:w-1/2 text-xl">
            <h3 className="text-ck_blue font-dmr text-3xl">Logiciels</h3>
            <Separator color={BLUE} font="dmr" />
            <div className="mb-4 md:mb-6">
              <h4 className="font-mm text-ck_blue mb-1">Expert:</h4>
              <StaticImage
                src="../images/about/About_1.jpg"
                alt="Logiciels expert"
                layout="constrained"
                height={60}
              />
            </div>
            <div>
              <h4 className="font-mm text-ck_blue mb-1">Professionnel:</h4>
              <StaticImage
                src="../images/about/About_2.webp"
                alt="Logiciels professionnel"
                layout="constrained"
                height={60}
              />
            </div>
          </div>
          <div className="lg:w-1/2 text-xl">
            <h3 className="text-ck_blue font-dmr text-3xl">Expériences</h3>
            <Separator color={BLUE} font="dmr" />
            <p className="font-mm text-ck_blue">
              Création de chartes graphiques et logos, d'identités de marques.
              Mise en page et impression sur tous types de supports.
              Photographie et retouche d'image. Packaging industriel.
              Illustration à la main et sur logiciel, dessin technique. Gestion
              de banques d'images, de bases de données et création de
              catalogues. Storyboard
            </p>
          </div>
        </section>
        <section className="px-4 py-6 lg:py-24 lg:px-52 bg-ck_blue flex flex-wrap">
          <div className="lg:w-1/2 mb-6 md:mb-0 text-2xl">
            <h3 className="text-white font-dmr text-3xl">Contact</h3>
            <Separator color={WHITE} font="dmr" />
            <p className="font-mm text-white">
              clementlement@gmail.com<br></br>0627963104
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <StaticImage
              src="../images/about/About_4.webp"
              alt="Photo de Clément Karl"
              layout="constrained"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

export default AProposPage;

export const Head = () => <Seo title="A propos | Clément Karl" />;
