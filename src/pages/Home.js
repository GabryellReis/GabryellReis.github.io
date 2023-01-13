import React from "react";
import Header from "../components/Header";
import HomeBody from "../components/HomeBody";
import "../css/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <HomeBody />
    </div>
  );
}
