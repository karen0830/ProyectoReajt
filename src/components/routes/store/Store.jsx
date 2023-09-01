import React, { useState, useEffect } from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../footer/Footer";

export const Store = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function Hola() {
    console.log("hola");
  }

  return (
    <>
      <Header />
      <div>
        <h1>Productos</h1>
        {products.length > 0 ? (
          <div>
            {products.map((product) => (
              <div className="text-black" key={product.id}> {/* Agrega una clave única para cada elemento */}
              <button onClick={Hola}>+</button>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>Precio: ${product.price}</p>
                <img src={product.image} alt="" />
              </div>
            ))}
          </div>
        ) : (
          <p>Cargando productos...</p>
        )}
      </div>
      <Footer />
    </>
  );
};
