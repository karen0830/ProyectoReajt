import "../footer/Footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div id="contact">
          <h3 className="text-gray-950"><b>Contacto:</b></h3>
          <h5 className="text-gray-950"><b>Nombre:</b> Karen Dahanna López</h5>
          <p className="text-gray-950"><b>Telefono:</b> +573168396465</p>
          <p className="text-gray-950"><b>Github:</b> karen0830</p>
          <p className="text-gray-950"><b>Correo:</b> lopezkaren43567@gmail.com</p>
        </div>
        <div id="icon">
          <img src="images/facebook.png" alt="facebook" />
          <img src="images/whatsapp.png" alt="whatsapp" />
          <img src="images/gorjeo.png" alt="twitter" />
          <img src="images/instagram.png" alt="instagram" />
        </div>
      </footer>
    </>
  );
};
