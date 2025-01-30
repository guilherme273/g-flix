import { useState, useEffect } from "react";
import "./BannerStyle.css";

function Banner() {
  const [imgs, setImgs] = useState("home");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImgs((prevImg) => {
        if (prevImg === "home") return "favoritos";
        if (prevImg === "favoritos") return "home";
        return "home";
      });
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="section-banner">
      <div
        className={`banner-img ${imgs === "home" ? "active" : ""}`}
        style={{ backgroundImage: "url(/img/banner-home.png)" }}
      ></div>

      <div
        className={`banner-img ${imgs === "favoritos" ? "active" : ""}`}
        style={{ backgroundImage: "url(/img/banner-favoritos.png)" }}
      ></div>
    </section>
  );
}

export default Banner;
