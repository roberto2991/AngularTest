import { Nation } from './model/nation';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  url: string;
  urlEmitted: string;
  visible = false;
  nationClicked: Nation;

  nations = [{
    "id": 1,
    "name": "Italy"
  },
  {
    "id": 1,
    "name": "Germany"
  },
  {
    "id": 1,
    "name": "England"
  }
  ];

  users = ['mario', 'valeria', 'roberto'];

  OpenWikiNation(nation: Nation) {
    console.log('hai digitato su tastiera', nation)
    //window.open(url:'https://it.wikipedia.org/wiki/' + nation.name);
    this.urlEmitted = 'https://it.wikipedia.org/wiki/' + nation.name;
    this.nationClicked = nation;
    window.open(this.urlEmitted);
  }

  ClickString(event: MouseEvent) {
    console.log('hai cliccato', event)
  }

  pressHandler(event: KeyboardEvent) {
    const target = event.target as HTMLInputElement
    console.log('hai digitato su tastiera', target.value)
  }

  DoVisible() {
    if (this.visible) {
      this.visible = false;
    } else {
      this.visible = true;
    }

  }

  Loadimg() {
    this.url = 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg';
  }
  Unloadimg() {
    this.url = null;
  }
}
