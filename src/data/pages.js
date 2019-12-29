const header = require("./header")
const footer = require("./footer")

module.exports = [
  {
    name: "index",
    path: "/",
    sections: [header, require("./hero"), require("./gallery"), footer],
  },

  {
    name: "blog",
    path: "/blog",
    sections: [header, require("./blog"), footer],
  },

  {
    name: "post",
    sections: [header, footer],
  },
]
