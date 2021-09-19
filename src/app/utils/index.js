/* eslint-disable */
function checkStrictMode(string) {
  var mode = (eval("var __temp = null"), (typeof __temp === "undefined")) ?
    "strict" :
    "non-strict";

  console.info('--- mode: ', mode);
}

module.exports = {
  checkStrictMode
};