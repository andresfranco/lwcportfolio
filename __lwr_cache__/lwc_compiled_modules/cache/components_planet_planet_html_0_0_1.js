import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./planet.css";

import _implicitScopedStylesheets from "./planet.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<h1${3}>PROGRAMMING LANGUAGES</h1>`;
const $fragment2 = parseFragment`<section class="programming${0}"${2}><div class="planet${0}"${2}></div><div class="circle${0}"${2}><span style="--i:1;"${3}><object data="/public/assets/javascriptlogo.svg" width="150" height="150"${3}></object>JAVASCRIPT</span><span style="--i:2;"${3}><object data="/public/assets/phpelephant.svg" width="150" height="150"${3}></object>PHP</span><span style="--i:3;"${3}><object data="/public/assets/pythonlogo.svg" width="150" height="150"${3}></object>PYTHON</span><span style="--i:4;"${3}><object data="/public/assets/rubylogo.svg" width="150" height="150"${3}></object>RUBY</span><span style="--i:5;"${3}><object data="/public/assets/javalogonotext.svg" width="150" height="150"${3}></object>JAVA</span></div></section>`;
const $fragment3 = parseFragment`<section class="data-integrations${0}"${2}><div class="planet${0}"${2}></div><div class="circle${0}"${2}><span style="--i:1;"${3}><object data="/public/assets/tibcologo.svg" width="150" height="150"${3}></object></span> --&gt;</div></section>`;
const $fragment4 = parseFragment`<section${3}><div class="planet${0}"${2}></div><div class="circle${0}"${2}><span style="--i:1;"${3}><object data="/public/assets/logo-salesforce.svg" width="150" height="150"${3}></object></span><span style="--i:2;"${3}><object data="/public/assets/dynamics365logo.svg" width="150" height="150"${3}></object>DYNAMICS365</span></div></section>`;
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment} = $api;
  return [api_static_fragment($fragment1(), 1), api_static_fragment($fragment2(), 3), api_static_fragment($fragment3(), 5), api_static_fragment($fragment4(), 7)];
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
  tmpl.stylesheetToken = "components-planet_planet"
}
freezeTemplate(tmpl);
