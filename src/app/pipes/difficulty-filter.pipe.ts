import { Pipe, PipeTransform } from '@angular/core';
import {HeroModule} from '../module/hero/hero.module';

@Pipe({
  name: 'difficultyFilter'
})
export class DifficultyFilterPipe implements PipeTransform {

  transform(value: HeroModule[], args: number): any {
    if (!value || !args) {
      return value;
    }
    return value.filter(_hero => {
      if (_hero.difficulty === args) {
        return _hero;
      }
    });
  }

}
