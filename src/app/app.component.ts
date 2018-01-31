import {Component, OnInit, Output} from '@angular/core';
import {HeroesService} from './service/heroes.service';
import {HeroModule} from './module/hero/hero.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Output() selectedDifficulty: number = null;
  @Output() filterName: string = null;
  heroList: HeroModule[];

  constructor(private service: HeroesService) {
  }

  ngOnInit(): void {
    this.fetchHeroList();
  }

  private fetchHeroList(): void {
    this.service.getHeroList().subscribe(data => {
      this.heroList = data;
      console.log(this.heroList);
    });
  }

  handleUpdate(): void {
    this.fetchHeroList();
  }

  handleDataSelectedDifficulty(event: number) {
    this.selectedDifficulty = event;
  }

  handleDataFilterName(event: string) {
    this.filterName = event;
  }
}
