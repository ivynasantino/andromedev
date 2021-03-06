import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layouts/layout";
import EventSchedule from "../components/eventSchedule";
import Planet1 from "../assets/svg/planeta1.svg";
import Planet2 from "../assets/svg/planeta2.svg";
import Planet3 from "../assets/svg/planeta3.svg";
import Planet4 from "../assets/svg/planeta4.svg";
import Planet5 from "../assets/svg/planeta5.svg";
import Logo from "../assets/png/andromedev.png";
import "../styles/home.css";

const Home = () => {
  return (
    <Layout title="Início" className={"bg-dark-gray text-white"}>
      <section className="w-full">
        <article className="w-full flex justify-center mx-auto max-w-3xl">
          <div className="max-w-xl flex flex-col items-center justify-center xl:mx-auto">
            <div className="logo">
              <img src={Logo} alt="Andromedev Logo" />
            </div>
            <p className="p-2 text-white text-center sm:text-xl mt-3">
              O primeiro evento de mentoria organizado pela{" "}
              <a
                href="https://opendevufcg.org/"
                target="_blank"
                rel="noreferrer"
                className="text-orange hover:underline"
              >
                OpenDevUFCG
              </a>
              &nbsp; com o intuito de incentivar a participação de estudantes em
              projetos <i>open source</i>!
            </p>
            <div className="p-6 w-full text-center block lg:flex lg:flex-row justify-center">
              <Link
                className="w-full my-2 lg:my-0 lg:w-48 block bg-blue-700 hover:bg-blue-600 px-4 py-2 mr-6"
                to="/sobre"
              >
                Saiba mais
              </Link>
              <Link
                className="w-full my-2 lg:my-0 lg:w-48 block text-white bg-blue-700 hover:bg-blue-600 px-4 py-2"
                to="/guia"
              >
                Guia de Bordo
              </Link>
            </div>
          </div>
        </article>
      </section>
      <section className="hidden lg:block planets-section bg-dark-gray relative">
        <img
          className="planet absolute z-10 h-auto"
          src={Planet1}
          alt="Planet1"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet2}
          alt="Planet2"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet3}
          alt="Planet3"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet4}
          alt="Planet4"
        />
        <img
          className="planet absolute z-10 h-auto"
          src={Planet5}
          alt="Planet5"
        />
      </section>
      <section className="waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </section>
      <section className="schedule text-gray-700 body-font bg-gray-100">
        <article className="container mt-10 lg:mt-0 px-5 pb-10 mx-auto flex flex-wrap">
          <EventSchedule />
        </article>
        <article className="container px-5 pb-12 mx-auto flex flex-wrap text-center items-center justify-center">
          <Link
            className="text-xl text-orange hover:underline"
            to="/cronograma"
          >
            Visualizar o cronograma completo
          </Link>
        </article>
      </section>
    </Layout>
  );
};

export default Home;
