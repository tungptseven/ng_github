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
  <div>
    <h3> details </h3>
    <!--<form (ngSubmit)='onSubmit()'>-->
      <div>
        <label>name: </label>
        <input type='text' #box (keyup.enter)="onEnter(box.value)">
        <p>{{box.value}}</p>
      </div>

      <button type='submit'>Get repos</button>
    <!--</form>-->
  </div>
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
  submitted = false;
  value = '';

  constructor(
    private http: Http
  ) { }

  onEnter(value: string) {
    this.value = value;
  }

  onSubmit() {
    this.submitted = true;
  }

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
