import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./galaxy.css";

import _implicitScopedStylesheets from "./galaxy.scoped.css?scoped=true";

import _componentsPlanet from "components/planet";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>THIS IS THE GALAXY PAGE</h1>`;
const $fragment2 = parseFragment`<a href="/charts"${3}>Go to charts</a>`;
const stc0 = {
  classMap: {
    "aqua": true
  },
  key: 2
};
const stc1 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element} = $api;
  return [api_static_fragment($fragment1(), 1), api_element("div", stc0, [api_text(api_dynamic_text($cmp.galaxyName))]), api_custom_element("components-planet", _componentsPlanet, stc1), api_static_fragment($fragment2(), 5)];
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
  tmpl.stylesheetToken = "components-galaxy_galaxy"
}
freezeTemplate(tmpl);
