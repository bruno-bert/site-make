const header = require("./header")
const footer = require("./footer")

module.exports = [
  {
    name: "index",
    path: "/",
    keywords: `maquiagem,maquiadora,profissional,Taubaté,atendimento,domiciliar,domicílio,agendamento online`,
    sections: [header, require("./hero"), require("./gallery"), require("./contact"), footer],
    locale: {
     
      invalidmail: 'Email inválido',
      required: 'Obrigatório',
      short: 'Mínimo de caracteres requerido',
      long: 'Excedeu máximo de caracteres perimitidos',

      mail: 'Email',
      name: 'Nome',
      subject: 'Assunto',
      message: 'Mensagem',
      submit: 'Enviar',
      reset: 'Limpar'

    }
    
  },

  {
    name: "contact",
    path: "/contact",
    keywords: `maquiagem,maquiadora,profissional,Taubaté,atendimento,domiciliar,domicílio,agendamento online`,
    sections: [header, require("./contact"), footer],
    locale: {
     
      invalidmail: 'Email inválido',
      required: 'Obrigatório',
      short: 'Mínimo de caracteres requerido',
      long: 'Excedeu máximo de caracteres perimitidos',

      mail: 'Email',
      name: 'Nome',
      subject: 'Assunto',
      message: 'Mensagem',
      submit: 'Enviar',
      reset: 'Limpar'

    }
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
    commentsProvider: "none",
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
