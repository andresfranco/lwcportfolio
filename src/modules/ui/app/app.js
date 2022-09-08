import { LightningElement } from 'lwc';

export default class HelloWorldApp extends LightningElement {
    
    message ="test"
    handleClick(){
        this.message ="other string"
    }
}
