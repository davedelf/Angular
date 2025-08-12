import { Directive } from "@angular/core";

@Directive({
    selector:'a[appEnlaceSeguro]',
    standalone:true,
})
export class EnlaceSeguroDirective{
    constructor(){
        console.log("La directiva del enlace seguro está activa");
    }
}