import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component'

// importação de componente personalizado
import { HelloWorldComponent } from './helloworld/helloworld.component'

@Component({
  selector: 'app-root',
  // adicionado o hello world
  imports: [ CalculadoraComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
