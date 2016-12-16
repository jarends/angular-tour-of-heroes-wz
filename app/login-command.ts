import {Injectable} from '@angular/core';
import {HeroService} from './hero.service';

@Injectable()
export class LoginCommand
{
    public static instances:number = 0;


    constructor(public service:HeroService)
    {
    }


    public create():LoginCommand
    {
        return new LoginCommand(this.service);
    }


    public execute():any
    {

    }
}
