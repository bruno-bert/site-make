const header = require("./header")
const footer = require("./footer")

module.exports = [
  {
    name: "index",
    path: "/",
    keywords: `maquiagem,maquiadora,profissional,Taubaté,atendimento,domiciliar,domicílio,agendamento online`,
    sections: [header, require("./hero"), require("./gallery"), footer],
  },

  {
    name: "blog",
    path: "/blog",
    keywords: `maquiagem,maquiadora,profissional,Taubaté,atendimento,domiciliar,domicílio,agendamento online`,
    sections: [header, require("./blog"), footer],
    locale: {
      on: 'on',
      by: 'By',
      readmore: 'Read More',
    }
  },

  {
    name: "post",
    blogHome: "/blog",
    sections: [header, footer],
    locale: {
      on: 'on',
      by: 'By',
      prev: 'Previous Post',
      home: 'Home',
      next: 'Next Post'
    }
  },
]
