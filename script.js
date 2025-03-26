function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light") // forma mais simples de escrever

  // e existe essa forma de escrever
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add("light")
  //  }

  //pegar a tag image
  const image = document.querySelector("#profile img")
  // substituir a image
  if (html.classList.contains("light")) {
    // se tiver no light mode, adicionar a image light
    image.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter image original
    image.setAttribute("src", "./assets/avatar.png")
  }
}
