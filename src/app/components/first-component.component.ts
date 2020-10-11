import { Utility } from './../utility/utility';
import { Component, OnInit } from '@angular/core';
import { Users } from './../model/users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  date = Date.now();
  decimal = 10.23230432;
  users: Users[];

  constructor(util: Utility, private http: HttpClient) {
    console.log('utilizziamo una classe provider ' + util.add(5, 6));

    //preleviamo dalla get rest api json da jsonplaceholder
    this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users').subscribe( data => {
      console.log(data)
      this.users = data;
    });

  }

  ngOnInit(): void {
  }

}
