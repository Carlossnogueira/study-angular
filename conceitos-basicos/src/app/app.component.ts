import { Component } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component'

// importação de componente personalizado
import { HelloWorldComponent } from './helloworld/helloworld.component'

import { ListaComprasComponent } from './lista-compras/lista-compras.component'

@Component({
  selector: 'app-root',
  // adicionado o hello world
  imports: [ CalculadoraComponent, ListaComprasComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
