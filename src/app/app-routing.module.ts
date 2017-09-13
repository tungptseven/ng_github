import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RepoListComponent } from './repo-list.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'repo/:name',
        component: RepoListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
