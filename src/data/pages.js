const header = require("./header")
const footer = require("./footer")

module.exports = [
  {
    name: "index",
    path: "/",
    sections: [header, require("./hero"), footer],
  },

  {
    name: "gallery",
    path: "/work",
    sections: [header, require("./gallery"), footer],
  },
]
