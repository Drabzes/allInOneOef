import { Pipe, PipeTransform } from '@angular/core';
import {HeroModule} from '../module/hero/hero.module';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(value: HeroModule[], args: string): any {
    if (!value || !args) {
      return value;
    }
    return value.filter(_hero => {
      if (_hero.name.toLowerCase().includes(args.toLowerCase())) {
        return _hero;
      }
    });
  }
}
