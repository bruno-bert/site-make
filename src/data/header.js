module.exports = {
  id: "header",
  type: "header",
  className: "header",
  header: {
    styles: {
      headerStyle: "{background: #000; opacity: 0.3;}", //this is a string
      navStyle: "", //this is an object
      logoStyle: '{"width": "64px", "height": "64px"}', //this is an object
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
