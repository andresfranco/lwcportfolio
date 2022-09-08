import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./charts.css";

import _implicitScopedStylesheets from "./charts.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "chart_container": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "donut": true
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("div", stc0, [api_element("canvas", stc1)])];
  /*LWC compiler v2.17.0*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "components-charts_charts"
}
freezeTemplate(tmpl);
