import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav>
        <img id="img" src="/images/Captura de pantalla 2023-08-02 080337.png" alt="" />
        <div id="container">
          <NavLink to="/">
            <a href="">
              <button>INICIO</button>
            </a>
          </NavLink>
          <NavLink to="/proyects">
            <a href="">
              <button>MIS PROYECTOS</button>
            </a>
          </NavLink>
          <NavLink to="/experience">
            <a href="">
              <button>EXPERIECIA</button>
            </a>
          </NavLink>

          <NavLink to="/Contact">
            <a href="">
              <button>CONTACTO</button>
            </a>
          </NavLink>

          <NavLink to="/Tienda">
            <a href="">
              <button>TIENDA</button>
            </a>
          </NavLink>
        </div>
      </nav>


      {/* <ul>
            <li>Karen Dahanna López Escamilla</li>
            <li>3168396462</li>
            <li>Barcelona</li>
            <img src="https://w0.peakpx.com/wallpaper/850/559/HD-wallpaper-lion-animal-face-faces-king-leon-lions.jpg" alt="leon" />
        </ul> */}
    </>
  );
};
