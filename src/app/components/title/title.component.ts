import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
})

//? El on changes se ejecuta cada vez que cambia un input, es decir, cada vez que cambia el valor de una propiedad de un componente.
//? En este caso, el componente TitleComponent tiene una propiedad title que es un input, por lo que cada vez que cambie el valor de title, se ejecutará el método ngOnChanges.
export class TitleComponent implements OnChanges {
  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges) {
    for (const inputName in changes) {
      const inputValues = changes[inputName];
      console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
      console.log(`Current ${inputName} == ${inputValues.currentValue}`);
      console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    }
  }
}
