module.exports = {
  id: "header",
  type: "header",
  className: "header",
  header: {
    styles: {
      headerStyle: ``,
      navStyle: ``,
      logoStyle: `{"width": "64px", "height": "64px"}`,
    },
    logoImage: "landing/sidelogo.svg",
    links: [
      { id: "home", description: "Home", href: "#home" },
      { id: "about", description: "Sobre Mim", href: "#about" },
      { id: "work", description: "Meu Trabalho", href: "#work" },
      { id: "contact", description: "Contato", href: "#contact" },
    ],
  },
}
