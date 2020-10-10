import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyApp';
  url: string;
  visible = false;
  users=['mario','valeria','roberto'];

  ClickString(event: MouseEvent){
    console.log('hai cliccato',event)
  }

  pressHandler(event: KeyboardEvent){
    const target = event.target as HTMLInputElement
    console.log('hai digitato su tastiera', target.value)
  }

  DoVisible(){
    if (this.visible){
      this.visible = false;
    }else{
      this.visible = true;
    }
    
  }

  Loadimg(){
    this.url = 'https://www.udemy.com/staticx/udemy/images/v6/logo-coral-light.svg';
  }
  Unloadimg(){
    this.url =  null;
  }
}
