import React, { useState, useEffect } from "react";
import { Header } from "../../Header/Header";
import { Footer } from "../../footer/Footer";
import "./Store.css";

export const Store = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [Title, setTitle] = useState(null);
  const [Description, setDescription] = useState(null);
  const [Image, setImage] = useState(null);
  const [Price, setPrice] = useState(null);
  const [Id, setId] = useState(null);
  const [classNameModal, setClassNameModal] = useState("hidden");
  const [items, setItems] = useState([]);
  const [totalS, setTotal] = useState(0);
  const [classShopping, setClassShopping] = useState("hidden");
  const [activateShopping, setActivateShopping] = useState(true);

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

  function countFunction(image, title, description, price, id) {
    console.log(count);
    let count1 = count + 1;
    setCount(count1);
    addItem(image, title, description, price, id);
    setTotal(totalS + price);
  }

  function ButtonModal(image, title, description, price, id) {
    setImage(image);
    setTitle(title);
    setDescription(description);
    setPrice(price);
    setId(id);
    setClassNameModal("visible w-3/10");
  }

  useEffect(() => {
    console.log(Image);
    console.log(Title);
    console.log(Description);
    console.log(Price);
    console.log(Id);
  }, [Title, Image, Description, Id]);

  useEffect(() => {
    items.forEach((product) => {
      console.log(product);
    });
    if (items.length === 0) {
      setTotal(0);
    }
    console.log(items.length);
  }, [items]);

  function closeModal() {
    setClassNameModal("hidden");
  }

  const addItem = (image, title, description, price, id) => {
    let add = 0;
    const newItem = {
      id: id,
      image: image,
      title: title,
      description: description,
      price: price,
      count: 1,
      total: price,
    };

    items.forEach((product) => {
      if (product.id == id) {
        product.count += 1;
        product.total = product.count * product.price;
        add += 1;
      }
    });

    if (add == 0) {
      setItems([...items, newItem]);
    }
  };

  function more(id) {
    const updatedItems = items.map((product) => {
      if (product.id === id) {
        setCount(count + 1);
        setTotal(totalS + product.price);
        return {
          ...product,
          count: product.count + 1,
          total: product.price * (product.count + 1),
        };
      }
      return product;
    });
    setItems(updatedItems);
  }

  function less(id) {
    const updatedItems = items
      .map((product) => {
        if (product.id === id) {
          setCount(count - 1);
          setTotal(totalS - product.price);
          return {
            ...product,
            count: product.count - 1,
            total: product.total - product.price * 1,
          };
        }
        return product;
      })
      .filter((product) => product.count > 0); // Filtramos los elementos cuyo count sea mayor o igual a 0;
    setItems(updatedItems);
  }

  function deleteId(id) {
    const updatedItems = items
      .map((product) => {
        if (product.id === id) {
          setCount(count - product.count);
          setTotal(totalS - product.total);
          return null;
        }
        return product;
      })
      .filter((product) => product !== null); // Filtramos los elementos que no son nulos

    setItems(updatedItems);
  }

  const see = () => {
    if (activateShopping) {
      setClassShopping("w-9/12 visible text-black flex flex-col gap-10 pt-5");
      setActivateShopping(false);
    } else {
      setClassShopping("hidden");
      setActivateShopping(true);
    }
  };

  return (
    <>
      <Header />
      <div>
        <div className="resultsShopping flex gap-5 text-lg items-center justify-center flex-col">
          <hr />
          <div className="ShoppingTotal">
            <button onClick={see} className="text-black h-16 w-32">
              <h1>Ver productos</h1>
              <span>
                <i className="ri-shopping-cart-fill">{count}</i>
              </span>
            </button>
            <p className="text-black">Total: {totalS.toFixed(2)}</p>
          </div>
          <div className={`${classShopping}`}>
            {items.map((item) => (
              <div
                className="cardShoping flex h-32 flex-row gap-6 justify-start items-center w-full"
                key={item.id}
              >
                <img className="w-28 h-28" src={item.image} alt="" />

                <div className="w-full">
                  <h2 className="">{item.title}</h2>
                  <p className="hidden">{item.description}</p>
                  <p>Precio: ${item.price}</p>
                  <button
                    onClick={() =>
                      ButtonModal(
                        item.image,
                        item.title,
                        item.description,
                        item.price,
                        item.id
                      )
                    }
                  >
                    Ver más Información
                  </button>
                </div>

                <div className="flex flex-col">
                  <div className="moreandLess flex flex-row gap-4 justify-start">
                    <button onClick={() => less(item.id)}>-</button>
                    <button>{item.count}</button>
                    <button onClick={() => more(item.id)}>+</button>
                  </div>
                </div>

                <div>
                  <p>Total: {item.total.toFixed(2)}</p>
                </div>

                <button onClick={() => deleteId(item.id)}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {products.length > 0 ? (
        <div className="flex flex-wrap gap-16 bg-white pt-5 pb-5">
          {products.map((product) => (
            <div
              className="product text-black w-64 bg-f0f0f0 mx-auto text-left"
              key={product.id}
            >
              <div className="flex gap-9">
                <img className="w-36 h-36" src={product.image} alt="" />
                <button
                  className="h-9 w-7"
                  onClick={() =>
                    countFunction(
                      product.image,
                      product.title,
                      product.description,
                      product.price,
                      product.id
                    )
                  }
                >
                  +
                </button>
              </div>
              <h2>{product.title}</h2>
              <p className="hidden">{product.description}</p>
              <p>Precio: ${product.price}</p>
              <div>
                <button
                  onClick={() =>
                    ButtonModal(
                      product.image,
                      product.title,
                      product.description,
                      product.price,
                      product.id
                    )
                  }
                >
                  Ver más Información
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Cargando productos...</p>
      )}
      <div className={`modal-container ${classNameModal}`}>
        <div className={`modal w-1/3 border border-solid border-gray-400 text-left p-32${classNameModal}`} key={Id}>
          <div className="flex flex-row-reverse justify-between items-center">
            <button className="w-12 h-12 mb-28" onClick={closeModal}>x</button>
            <img className="w-36 h-36 flex" src={Image} alt="" />
          </div>
          <h2>{Title}</h2>
          <p className={classNameModal}>{Description}</p>
          <p>Precio: ${Price}</p>
          <button
          className="w-12 h-12"
            onClick={() => countFunction(Image, Title, Description, Price, Id)}
          >
            +
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
