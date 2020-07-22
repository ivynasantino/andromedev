import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Item = ({ children, slug, className }) => (
  <Link
    className={`block p-4 text-dark-gray hover:bg-purple-200 hover:bg-opacity-25 hover:text-purple-600 ${className}`}
    to={slug}
  >
    {children}
  </Link>
);
const Navbar = () => {
  return (
    <>
      <button className="bg-dark-gray right-0 bottom-0 rounded-full">
        <FontAwesomeIcon icon={faCoffee} />
      </button>
      <aside className="w-64 my-2 absolute hidden md:block lg:block">
        <nav className="flex flex-col">
          <Item slug="/guia">Introdução</Item>
          <Item slug="/guia/organizacao">Guia da Organização</Item>
          <Item slug="/guia/organizacao/projeto" className="ml-4">
            Criação de Projeto
          </Item>
          <Item slug="/guia/organizacao/projeto/repositorio" className="ml-8">
            Requisitos do Repositório
          </Item>
          <Item slug="/guia/mentor">Guia do Mentor</Item>
          <Item slug="/guia/aprendiz">Guia do Aprendiz</Item>
        </nav>
      </aside>
    </>
  );
};

export default Navbar;
