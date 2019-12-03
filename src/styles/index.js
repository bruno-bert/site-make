/** this css file resets the styles by removing the
 * browser default properties like margins, paddings, ... */
import "./normalize.css"

/** these are the common styles / variables that are applied to all themes */
import typography from "./_typography"
import breakpoints from "./_breakpoints"

import * as themes from "./themes"

export { themes, typography, breakpoints }
