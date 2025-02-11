import { useState, useEffect } from "react";
import "./BannerFavoritosStyle.css";

function BannerFavoritos() {


  return (
    <section className="section-banner">
      <div
        className='banner-img active'
        style={{ backgroundImage: "url(/img/banner-assistir.png)" }}
      ></div>

    </section>
  );
}

export default BannerFavoritos;
