import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { RepoService } from './repo.service';

@Component({
    selector: 'repo-list',
    template: `
        <h3> {{username}}'s repositories: </h3>
        <ul>
            <li *ngFor='let repo of data'>
            <span> {{ repo.name }} </span>
            </li>
        </ul>
        <p *ngIf='data.length == 0'> Not found!!! </p>
        <button (click)="goDashboard()">Back</button>
    `,
    providers: [RepoService]
})

export class RepoListComponent implements OnInit {
    baseUrl = 'https://api.github.com/users/';
    data = [];
    username = '';

    constructor(
        private router: Router,
        private repoService: RepoService,
        private http: Http,
        private route: ActivatedRoute
    ) { }

    goDashboard(): void {
        this.router.navigate(['/']);
    }

    ngOnInit() {
        this.route.params
            .subscribe((value) => {
                this.username = value.name;
                this.http.get(this.baseUrl + value.name + '/repos')
                    .subscribe(res => {
                        this.data = res.json();
                    });
            });
    }

    getList() {
        this.http.get(this.baseUrl + name + '/repos')
            .subscribe(res => {
                this.username = name;
                this.data = res.json();
                console.log(this.data);
                console.log(this.username);
            });
    }
}
