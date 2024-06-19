import React from "react";
import { Link } from "react-router-dom";
import {
  RiBriefcase4fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import { useTypewriter } from "react-simple-typewriter";
import Socials from "./Socials";

const About = () => {
  const [text] = useTypewriter({
    words: [
      "Coach Estrategico",
      "Conferencista",
      "Escritor",
      "Profesor",
      "Terapeuta",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-24 bg-about bg-no-repeat">
      <Socials />
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-x-8">
          <div className="xl:flex relative order-1 mt-6 px-12">image</div>
          <div className="flex flex-col max-w-[850px] justify-center mx-auto xl:mx-0 px-12 md:px-28 order-2 mt-6">
            <h1 className="about">Virgilio Cordon PhD.</h1>
            <h3 className="typewriter mt-2" style={{ minHeight: "1.4em" }}>
              {text}
            </h3>
            <div>
              <p className="subtitle mt-4 max-w-[550px] mx-auto xl:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex mt-8 items-center">
                <Link to="/services" className="button">
                  <button className="bg-third hover:bg-fourth py-2 px-4 rounded-md text-white">
                    Mas informacion
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
