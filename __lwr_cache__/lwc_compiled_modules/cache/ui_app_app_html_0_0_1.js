import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import _componentsGalaxy from "components/galaxy";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<img src="/public/assets/recipes-logo.png" alt="logo"${3}>`;
const $fragment2 = parseFragment`<h1${3}>Hello World!</h1>`;
const stc0 = {
  key: 0
};
const stc1 = {
  key: 5
};
const stc2 = {
  key: 6
};
const stc3 = {
  "slds-button": true,
  "slds-button_neutral": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("main", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4), api_element("h3", stc1, [api_text(api_dynamic_text($cmp.message))]), api_custom_element("components-galaxy", _componentsGalaxy, stc2), api_element("button", {
    classMap: stc3,
    key: 7,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }, [api_text("Neutral Button")])])];
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
  tmpl.stylesheetToken = "ui-app_app"
}
freezeTemplate(tmpl);
