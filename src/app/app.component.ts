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
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Github demo';
}
