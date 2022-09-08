import { LightningElement } from "lwc";

export default class Galaxy extends LightningElement {
  galaxyName = "Salesforce Galaxy"
  planets = [
    {
      id: "1",
      name: "LWC",
      description: "List of custom Light Web components",
    },
    {
     id: "2",
     name: "External APIS",
     description: "Consuming External APIS in APEX",
   },
    
  ]
}
