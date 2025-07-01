import { Component } from '@angular/core'

// Decorator
@Component({
   selector: 'hello-world', // como acessar no html, referenciando por tag
   template: '<h1>Hello World!</h1>' 
})
export class HelloWorldComponent {

}