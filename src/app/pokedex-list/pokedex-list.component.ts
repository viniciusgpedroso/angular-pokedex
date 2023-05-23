import { Component, OnInit } from '@angular/core';
import { PokeListEntry } from '../model/pokeData';
import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss'],
})
export class PokedexListComponent implements OnInit {
  pokemons: PokeListEntry[] = [];
  selected: number = 1;

  constructor(private service: PokemonListService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  onSelect(id: number) {
    this.selected = id;
    this.service.setSelectedPokemon(id);
  }

  getPokemonList(limit = 20) {
    this.pokemons = this.service.fetchAndAddPokemonList(limit);
  }
}
