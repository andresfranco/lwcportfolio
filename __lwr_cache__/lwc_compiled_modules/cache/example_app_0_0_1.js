import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./app.html";

class HelloWorldApp extends LightningElement {
  constructor(...args) {
    super(...args);
    this.message = "test";
  }

  handleClick() {
    this.message = "other string";
  }
  /*LWC compiler v2.17.0*/


}

_registerDecorators(HelloWorldApp, {
  fields: ["message"]
});

export default _registerComponent(HelloWorldApp, {
  tmpl: _tmpl
});