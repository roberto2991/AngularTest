import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-decorator-input',
  template: '<p>{{name}} ha scelto il colore: {{color}} </p>'
})
export class DecoratorInputComponent implements OnInit {

  @Input() name: string;
  @Input() color = 'grey'; //impostato valore di default

  constructor() { }

  ngOnInit(): void {
  }

}
