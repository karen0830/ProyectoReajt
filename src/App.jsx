import { Routes, Route } from "react-router-dom";
import { Home } from "./components/layouts/home/Home";
import { Proyects } from "./components/proyects/Proyects.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Store } from "./components/store/Store.jsx";
import "./App.css";
import { Contact } from "./components/Contact/Contact.jsx";
// Fragment no se estilizan
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/proyects" element={<Proyects/>}></Route>
      <Route path="/experience" element={<Experience/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/tienda" element={<Store/>}></Route>
    </Routes>
  );
}

export default App;
