const meta = require("./meta")
const header = require("./header")
const hero = require("./hero")
const gallery = require("./gallery")

module.exports = {
  ...meta,
  sections: [header, hero, gallery],
}
