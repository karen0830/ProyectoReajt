import React from "react";
import "../Main/Main.css";

export const Main = () => {
  return (
    <>
      <section className="flex" id="section1">
        <div id="myInformation">
          <div id="Text">
            <h1 className="text-2xl">
              <b>¡Hola! soy Karen Dahanna López Escamilla</b>
            </h1>
            <h4 className="text-xl">
              <b>Estudiante de Analisis y Desarrollo de software</b>
            </h4>
          </div>
          <div id="paragraphContainer">
            {/* <img id="myself" src="images/Snapchat-4659695.jpg" alt="yo" /> */}
            <p className="w-full" id="paragraph">
              Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
              simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica
              de la literatura del Latin, que data del año 45 antes de Cristo,
              haciendo que este adquiera mas de 2000 años de antiguedad. Richard
              McClintock, un profesor de Latin de la Universidad de Hampden-Sydney
              en Virginia, encontró una de las palabras más oscuras de la lengua
            </p>
          </div>
        </div>
        <div id="Technologies">
          <h1 id="text-2xl">
            <b>Tecnologías</b>
          </h1>
          <div id="icon_Technologies">
            <a href="#" class="HTML">
              <span class="icon">
                <i id="icon" class="ri-html5-fill"></i>
              </span>
              <h4 id="type">HTML avanzado</h4>
            </a>
            <a href="#" class="Javascript TypeTechnologie">
              <span class="icon">
                <i class="ri-javascript-fill"></i>
              </span>
              <h4 id="type">JavaScript intermedio</h4>
            </a>
            <a className="" href="#" class="TypeTechnologie Java">
              <img className="w-14 h-14" src="images/java.png" alt="java" />
              <h4 id="type">Java intermedio</h4>
            </a>
            <a className="" href="#" class="TypeTechnologie Typescript">
              <img
                className="w-14 h-14"
                src="images/icons8-typescript-48.png"
                alt="java"
              />
              <h4 id="type">Typescript intermedio</h4>
            </a>
            <a className="" href="#" class="TypeTechnologie Python">
              <img
                className="w-14 h-14"
                src="images/icons8-python-64.png"
                alt="java"
              />
              <h4 id="type">Python Basico</h4>
            </a>
            <a className="" href="#" class="TypeTechnologie css3">
              <img className="w-14 h-14" src="images/file_type_css_icon_130661.png" alt="css" />
              <h4 id="type">CSS intermedio</h4>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
