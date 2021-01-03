import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: any;
  id: number;
  nextId:number;

  constructor(private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      console.log('on INIT');
      this.id = +this.activatedRoute.snapshot.params['id'];

      this.http.get<any>(`https://jsonplaceholder.typicode.com/users/${this.id}`).subscribe(data => {
        console.log(data)
        this.user = data;
      });
    });
  }

  next() {
    this.nextId = +this.id + 1;
    this.router.navigateByUrl(`/users/${this.nextId}`);

  }

}
