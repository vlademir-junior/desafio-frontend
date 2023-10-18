import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import List from "./components/List";
import Favorites from "./components/Favorites";

export default function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<List type="noticia" />} />
          <Route path="/releases" element={<List type="release" />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
    </Router>
  );
}
