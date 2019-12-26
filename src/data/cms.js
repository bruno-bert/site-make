const meta = require("./meta")
const header = require("./header")
const hero = require("./hero")
const gallery = require("./gallery")
const footer = require("./footer")
const globalStyles = require("./globalStyles")

module.exports = {
  ...meta,
  ...globalStyles,
  sections: [header, hero, gallery, footer],
}
