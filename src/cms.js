module.exports = {
  /** temporary properties until the cms is implemented
   * in future, this will be pulled from cms
   */
  theme: `light`,

  links: [
    { id: "home", description: "Home", href: "#home" },
    { id: "missao", description: "Missão", href: "#missao" },
    { id: "sobre", description: "Sobre", href: "#sobre" },
    { id: "problema", description: "Problema", href: "#problema" },
    {
      id: "aplicacao",
      description: "Aplicação do Cliente",
      href: "#aplicacao",
    },
    { id: "recursos", description: "Recursos", href: "#recursos" },
    { id: "roadmap", description: "Roadmap", href: "#roadmap" },
  ],

  sections: [
    {
      id: "hero",
      type: "hero",
      hero: {
        title: "Nota Amiga",
        subTitle:
          "Ajudamos Instituições Assistenciais na coleta e gerenciamento de seus créditos da Nota Fiscal Paulista",
        backgroundImage: "landing/header-background.jpg",
        callToAction: {
          text: "Baixar o Aplicativo do Cliente",
          href: "files/setup.exe",
        },
        videoBox: {
          backgroundImage: "landing/video-image.png",
          buttonImage: "landing/video-button.png",
          href: "https://www.youtube.com/watch?v=7e90gBu4pas",
        },
      },
    },
  ],
}
