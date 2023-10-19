import React from "react";

function Functionality() {
  let cloud = document.querySelector(".cloud");
  let e = document.createElement("div");

  e.classList.add("drop");
  cloud.appendChild(e);

  setTimeout(() => {
    cloud.removeChild(e);
  }, 2000);
}

export default Functionality;
