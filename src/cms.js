module.exports = {
  /** temporary properties until the cms is implemented
   * in future, this will be pulled from cms
   */

  links: [
    { id: "home", description: "Home", href: "#home" },
    { id: "about", description: "Sobre Mim", href: "#about" },
    { id: "work", description: "Meu Trabalho", href: "#work" },
    { id: "instagram", description: "Instagram", href: "#instagram" },
    { id: "contact", description: "Contato", href: "#contact" },
  ],

  sections: [
    {
      id: "hero",
      type: "hero",
      hero: {
        title: "Gisele <span>Bertoni</span>",
        subTitle: "Maquiagem Para Festas - Noivas - Infantil",
        backgroundImage: "landing/hero-background.jpg",
        callToAction: {
          text: "Agende seu Horário",
          href: "#agendar",
        },
      },
    },
  ],
}
