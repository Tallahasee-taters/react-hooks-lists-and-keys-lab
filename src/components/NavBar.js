import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links)

  return (
  <nav>
    <a key="links" href="#home">home</a>
    <a key="about" href="#about">about</a>
    <a key="projects" href="#projects">projects</a>
  </nav>
  )
}

export default NavBar;
