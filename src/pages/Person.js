import React from "react";
import Header from "../components/Header";

function Person() {
  return (
    <div>
      <Header />
      <div>
        <img src="myfoto" alt=""/> <br />
        <text>Descrição sobre mim. Umas 4 ou 6 linhas</text>
        <div>
          carrossel de imagens <br />
          <img src="img1" alt=""/>
          <img src="img2" alt=""/>
          <img src="img3" alt=""/>
          <img src="img5" alt=""/>
          <img src="img6" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Person;
