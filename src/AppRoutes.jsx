import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Developpeurs from "./Developpeurs";
import Recruteurs from "./Recruteurs";
import IA from "./IA";
import Actualites_dev from "./Actualites_dev";
import Contact from "./Contact";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recruteurs" element={<Recruteurs />} />
      <Route path="/developpeurs" element={<Developpeurs />} />
      <Route path="/actualites" element={<Actualites_dev />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;