import { Routes, Route } from "react-router-dom";
import { Home } from "./components/layouts/home/Home";
import { Proyects } from "./components/routes/proyects/Proyects";
import { Experience } from "./components/routes/experience/experience";
import { Store } from "./components/routes/store/Store";
import "./App.css";
import { Contact } from "./components/routes/Contact/Contact";
// Fragment no se estilizan
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/proyects" element={<Proyects/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/Tienda" element={<Store/>}></Route>
    </Routes>
  );
}

export default App;
