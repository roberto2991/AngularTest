import { Component, OnInit } from '@angular/core';
import { Users } from './../model/users';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  date = Date.now();
  decimal = 10.23230432;

  users: Users[] = [
        {id: 1,
          name:'mario',
          testo:'mario ie nu bell waglion e fasc tand cos bell'
        },
        {id: 2,
          name:'valeria',
          testo:'valeria ie na bell wagned e fasc tand '
        }
      ];

  constructor() { }

  ngOnInit(): void {
  }

}
