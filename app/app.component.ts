import {Injector} from '@angular/core';
import { Component } from '@angular/core';
import {HeroService} from './hero.service';
@Component({
    selector: 'my-app',
    styleUrls: ['app/app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/both" routerLinkActive="active">Both</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent
{
    title = 'Tour of Heroes';


    constructor(public service:HeroService, public injector:Injector)
    {
    }
}
