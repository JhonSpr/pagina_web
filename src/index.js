import React from "react";
import ReactDOM from "react-dom/client";
import "./Css/App.css";
import "./Css/bulma.min.css";
import "./Css/hover.css";
import "./Css/InfoAnimes.css";
import "./Css/Pagination.css";
import "./Css/Video.css";
import "./Css/inicio.css";

import { PageAnime } from "./Pages/PageAnimes";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import PageInicio from "./Pages/PageInicio";
import Routes12 from "./Routes/Routes12";
import Routes24 from "./Routes/Routes24";
import Routes36 from "./Routes/Routes36";

import { PageEmisiones } from "./Pages/PageEmisiones";
import {
  PageTV,
  PageTV2,
  PageTV3,
  PageTV4,
  PageTV5,
  PageTV6,
  PageTV7,
} from "./Pages/pageTV";
import { Videos36 } from "./videos/Videos36";
import Videos12 from "./videos/Videos12";
import Routes13 from "./Routes/Routes13";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />

    <BrowserRouter>
      <Routes12 />
      <Routes13 />
      <Routes24 />
      <Routes36 />
      <Videos12 />

      <Videos36 />
      <Routes>
        <Route path="/" element={<PageInicio />} />
        <Route path="/animes" element={<PageAnime />} />
        <Route path="/finalizados" element={<PageAnime />} />
        <Route path="/en-emision" element={<PageEmisiones />} />
        <Route path="/animes/tv" element={<PageTV />} />
        <Route path="/animes/tv=page2" element={<PageTV2 />} />
        <Route path="/animes/tv=page3" element={<PageTV3 />} />
        <Route path="/animes/tv=page4" element={<PageTV4 />} />
        <Route path="/animes/tv=page5" element={<PageTV5 />} />
        <Route path="/animes/tv=page6" element={<PageTV6 />} />
        <Route path="/animes/tv=page7" element={<PageTV7 />} />
      </Routes>
    </BrowserRouter>
  </>
);
