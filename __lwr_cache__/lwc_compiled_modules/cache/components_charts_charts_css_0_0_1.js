function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ".chart_container" + shadowSelector + "{height: 200px;width: 200px;}";
  /*LWC compiler v2.17.0*/
}
export default [stylesheet];