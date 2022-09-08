import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./galaxy.html";

class Galaxy extends LightningElement {
  constructor(...args) {
    super(...args);
    this.galaxyName = "Salesforce Galaxy";
    this.planets = [{
      id: "1",
      name: "LWC",
      description: "List of custom Light Web components"
    }, {
      id: "2",
      name: "External APIS",
      description: "Consuming External APIS in APEX"
    }];
  }
  /*LWC compiler v2.17.0*/


}

_registerDecorators(Galaxy, {
  fields: ["galaxyName", "planets"]
});

export default _registerComponent(Galaxy, {
  tmpl: _tmpl
});