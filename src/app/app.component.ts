import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

export class Repo {
  id: number;
  name: string;
}


@Component({
  selector: 'app-root',
  template: `
  <h1> {{title}} </h1>
  <ul>
    <li *ngFor='let repo of data'>
      <span> {{ repo.name }} </span>
    </li>
  </ul>
  `,
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Github demo';
  data = [];

  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.http.get('https://api.github.com/users/tungptseven/repos')
    .subscribe(res => {
      // console.log(res.json());
      console.log(res);
      this.data = res.json();
      console.log(this.data);
    });
  }
}
