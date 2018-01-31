import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './component/hero/hero.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {HeroesService} from './service/heroes.service';
import { HeroListComponent } from './component/hero-list/hero-list.component';
import { SearchComponent } from './component/search/search.component';
import { NameFilterPipe } from './pipes/name-filter.pipe';
import { DifficultyFilterPipe } from './pipes/difficulty-filter.pipe';
import { RandomPageComponent } from './component/random-page/random-page.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroListComponent,
    SearchComponent,
    NameFilterPipe,
    DifficultyFilterPipe,
    RandomPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
