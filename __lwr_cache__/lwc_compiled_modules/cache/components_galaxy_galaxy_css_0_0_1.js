function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".aqua" + shadowSelector + "{background-color: aqua;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];