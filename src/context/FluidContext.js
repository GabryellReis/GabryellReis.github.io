import React from "react";
import MainContext from "./MainContext";

function FluidContext({ children }) {
  return (
    <MainContext.Provider value={MainContext}>
      <div>{children}</div>
    </MainContext.Provider>
  );
}

export default FluidContext;
