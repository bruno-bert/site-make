const headComponents = require("./headComponents")
const postBodyComponents = require("./postBodyComponents")
const pages = require("./pages")

module.exports = {
  title: `Gisele Bertoni Make Profissional`,
  description: `Maquiadora Profissional para festas, noivas e infantil. Atendimento a domicílio. Taubaté e Região`,
  author: `Bruno Bertoni de Paula`,
  siteUrl: `https://www.giselebertoni.com.br`,
  keywords: `maquiagem,maquiadora,profissional,Taubaté,atendimento,domiciliar,domicílio,agendamento online`,
  email: "giselebertonimake@gmail.com.br",
  postBodyComponents: postBodyComponents,
  headComponents: headComponents,
  theme: "theme-poc",
  pages: pages,
  blogPrefix: "/blog/posts",
}
