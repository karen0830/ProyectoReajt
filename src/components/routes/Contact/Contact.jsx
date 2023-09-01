import { Header } from "../../Header/Header"
import { Footer } from "../../footer/Footer"


import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        mensaje: '',
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
        
            </main>
            <Footer></Footer>
        </>
    )
}