import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import List from "./components/List";
import Details from "./components/Details";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<List type="noticia" />} />
          <Route path="/releases" element={<List type="release" />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:tipo/:id" element={<Details />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
