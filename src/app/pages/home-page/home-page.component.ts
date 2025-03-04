import { afterNextRender, afterRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color:rgb(255, 153, 0); font-weight: bold;'
  )
}

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit, OnChanges {
  traditionalProperty = 'Angel';
  signalProperty = signal('Angel');

  constructor() {
    log('Home Page Component - Constructor Called');
    // setTimeout(() => {
    //   console.log('Change property traditional');

    // }, 2000);
  }

  changePropertyTraditional() {
    this.traditionalProperty = 'Angel Poot';
  }

  changeSignalProperty() {
    this.signalProperty.set('Angel Poot');
  }

  basicEffect = effect((onCleanup) => {
    log('basicEffect', 'Dispirar efectos secundarios');

    onCleanup(() => {
      log('basicEffect', 'Se ejecuta cuando el efecto se destruye');
    })
  })

  ngOnInit()	{
    log(
      "ngOnInit",
      "Runs once after Angular has initialized all the component's inputs.")
  }
  ngOnChanges()	{
    log(
      "ngOnChanges",
      "Runs every time the component's inputs have changed.")
  }
  ngDoCheck()	{
    log(
      "ngDoCheck",
      "Runs every time this component is checked for changes.")
  }
  ngAfterContentInit()	{
    log(
      "ngAfterContentInit",
      "Runs once after the component's content has been initialized.")
  }
  ngAfterContentChecked()	{
    log(
      "ngAfterContentChecked",
      "Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit()	{
    log(
      "ngAfterViewInit",
      "Runs once after the component's view has been initialized.")
  }
  ngAfterViewChecked()	{
    log(
      "ngAfterViewChecked",
      "Runs every time the component's view has been checked for changes.")
  }

  ngOnDestroy() {
    log(
      "ngOnDestroy",
      "Runs once before the component is destroyed.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log(
      'afterNextRenderEffect',
    )
  });

  afterRender = afterRender(() => {
    log(
      "afterRender",
      "Runs every time all components have been rendered to the DOM."
    )
  });
}
