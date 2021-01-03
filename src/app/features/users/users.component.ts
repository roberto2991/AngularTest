import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/model/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Users[];

  constructor(private http: HttpClient) {
    this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
      console.log(data)
      this.users = data;
    });
   }

  ngOnInit(): void {
  }

}
