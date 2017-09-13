import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { RepoService } from './repo.service';

@Component({
    selector: 'my-dashboard',
    providers: [RepoService],
    template: `
    <div>
    <h3> Find <input type='text' #box (keyup.enter)="onEnter(box.value)">'s repositories </h3>
    </div>
    `
})

export class DashboardComponent {
    baseUrl = 'https://api.github.com/users/';
    data = [];

    constructor(
        private http: Http,
        private router: Router,
        private repoService: RepoService
    ) { }

    onEnter(value: string) {
        this.router.navigate(['/repo', value]);
    }
}
