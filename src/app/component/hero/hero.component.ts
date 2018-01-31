import {Component, Input, OnInit} from '@angular/core';
import {HeroModule} from '../../module/hero/hero.module';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: HeroModule;
  constructor() { }

  ngOnInit() {
  }

}
