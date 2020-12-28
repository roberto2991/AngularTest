import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meteo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.scss']
})
export class MeteoComponent implements OnInit {

  @Input() city: string;
  whether: any;

  constructor(private http: HttpClient) {

    console.log('nel costruttore: ' + this.city)

  }

  ngOnInit(): void {
    if (this.city) {
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=9d93c4934974aae85d07a69eedbdf98d`).
        subscribe(res => {
          console.log(res);
          this.whether = res;
        });
    }
    //con la ChangeDetectionStrategy.OnPush non riesco a vedere l'oggetto di default
    console.log('nel OnInit: ' + this.whether)
  }

  printMe() {
    console.log('render me');
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    const citychange = changes.city.currentValue
    console.log(changes)

    if (citychange) {
      this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=9d93c4934974aae85d07a69eedbdf98d`).
        subscribe(res => {
          console.log(res);
          this.whether = res;
        });
    }
  }

}
