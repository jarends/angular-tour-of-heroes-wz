import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit
{

    heroes:Hero[] = [];

    constructor(private heroService:HeroService)
    {
    }

    ngOnInit():void
    {
        console.log('dashboard module.id = ', module.id);
        this.heroService.getHeroes()
            .then(heroes =>
            {
                this.heroes = heroes.concat().sort((heroA, heroB) => heroB.stars - heroA.stars);
                this.heroes.length = 4;
            })
    }
}
