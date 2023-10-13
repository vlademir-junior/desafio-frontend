import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import NoticiasList from "./components/noticias/NoticiasList";
import ReleasesList from "./components/releases/ReleasesList";
import FavoritosList from "./components/favoritos/FavoritosList";
import NoticiaDetails from "./components/details/NoticiaDetails";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<NoticiasList />} />
          <Route path="/releases" element={<ReleasesList />} />
          <Route path="/favoritos" element={<FavoritosList />} />
          <Route path="/noticias/:id" element={<NoticiaDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
