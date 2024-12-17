import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-ck_blue text-4xl">Vous êtes perdu...</h1>
      <p className="text-ck_blue text-xl">
        <br />
        <Link to="/">Retour à la page d'accueil</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
