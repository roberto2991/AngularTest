import { Users } from './../../model/users';
import { FormsModule, NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent implements OnInit {

  username: string;
  name: string;
  email: string;
  id: number;
  user: Users;

  users = [];

  AddUser(form: NgForm) {
    console.log(form);
    this.users.push(form.value);
    form.reset();
  }

  Edit(user: Users) {
    this.user = user;
  }

  constructor() { }

  ngOnInit(): void {
  }

  //base
  // AddUser(input: HTMLInputElement) {
  //   this.users.push(input.value);
  //   input.value = '';
  //   input.focus;

  // }



}
