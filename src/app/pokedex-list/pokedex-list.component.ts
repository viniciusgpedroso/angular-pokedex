import { Component } from '@angular/core';
import { POKEMONS } from '../mock-pokemon-entries';
import { PokeListEntry } from '../model/pokeData';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent {
  pokemons: PokeListEntry[] = POKEMONS;
  selected: Number = 1;

  onSelect(id: Number) {
    this.selected = id;
  }
}
