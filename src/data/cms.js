const header = require("./header")
const hero = require("./hero")

module.exports = {
  /** temporary properties until the cms is implemented
   * in future, this will be pulled from cms
   */

  ...header,

  sections: [hero],
}
