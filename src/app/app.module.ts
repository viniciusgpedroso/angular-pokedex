import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexEntryComponent } from './pokedex-entry/pokedex-entry.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { PokedexDetailsComponent } from './pokedex-details/pokedex-details.component';

@NgModule({
  declarations: [AppComponent, PokedexEntryComponent, PokedexListComponent, PokedexDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
