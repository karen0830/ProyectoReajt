import { Header } from "../../Header/Header";
import { Footer } from "../../footer/Footer";

import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });
}

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  // Aquí puedes enviar los datos a un servidor o realizar otras acciones
};

export const Contact = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div id="contact" className="bg-gray-200 p-8 h-screen">
          <h1 className="text-4xl font-semibold mb-4">Contacto</h1>
          <form className="flex flex-col gap-4">
            <label htmlFor="name" className="text-gray-600">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="border rounded p-2 focus:outline-none focus:border-blue-500"
              placeholder="Ingresa tu nombre"
            />

            <label htmlFor="email" className="text-gray-600">
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              className="border rounded p-2 focus:outline-none focus:border-blue-500"
              placeholder="Ingresa tu correo electrónico"
            />

            <label htmlFor="message" className="text-gray-600">
              Mensaje:
            </label>
            <textarea
              id="message"
              className="border rounded p-2 h-32 focus:outline-none focus:border-blue-500"
              placeholder="Escribe tu mensaje aquí"
            />
            <button className="bg-blue-800 py-1.5">enviar</button>
          </form>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
