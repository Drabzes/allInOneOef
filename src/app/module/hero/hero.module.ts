import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HeroModule {
  id: string;
  abilities: string[];
  avatar: string;
  class: string;
  difficulty: number;
  dps: number;
  name: string;

  constructor(abilities: string[], avatar: string, classe: string, difficulty: number, dps: number, name: string, id?: string) {
    this.abilities = abilities;
    this.avatar = avatar;
    this.class = classe;
    this.difficulty = difficulty;
    this.dps = dps;
    this.name = name;
    this.id = id;
  }
}
