import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class RepoService {
    baseUrl = 'https://api.github.com/users/';
    data = [];
    username = '';

    constructor(
        private http: Http
    ) { }

    getRepo(name: string) {
        console.log('Get run ' + name);
        this.http.get(this.baseUrl + name + '/repos')
            .subscribe(res => {
                this.username = name;
                this.data = res.json();
                console.log(this.data);
                console.log(this.username);
            });
    }
}
