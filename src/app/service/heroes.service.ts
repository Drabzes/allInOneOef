import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HeroModule} from '../module/hero/hero.module';

const BASEAPIURL: string = 'https://overwatch-9dba4.firebaseio.com/heroes.json';

@Injectable()
export class HeroesService {

  constructor(private http: Http) { }

  getHeroList(): Observable<HeroModule[]> {
    return this.http.get(BASEAPIURL)
      .map(res => res.json())
      .map(this.parseHeroModule)
      .catch(this.onError);
  }

  private parseHeroModule(rawHeroes: any[]): HeroModule[] {
    return Object.keys(rawHeroes).map(key => {
      let hero = rawHeroes[key];
      return new HeroModule(
        hero.abilities,
        hero.avatar,
        hero.class,
        hero.difficulty,
        hero.dps,
        hero.name,
        key
      );
    });
  }
  onError(res: Response): Observable<any> {
    let error = 'Error ${res.status}: ${res.statusText}';
    console.log(error);
    return Observable.throw(error);
  }
}
