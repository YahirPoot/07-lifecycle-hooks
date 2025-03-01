import { Component } from '@angular/core';

const log = (...messages: string[]) => {
  console.log(
    `${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color:rgb(255, 153, 0); font-weight: bold;'
  )
}

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor() {
    log('Home Page Component - Constructor Called');
  }




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
}
