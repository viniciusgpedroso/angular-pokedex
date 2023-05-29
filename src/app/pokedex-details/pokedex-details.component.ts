import { Component, Input, OnInit } from '@angular/core';
import { PokeDetails } from '../model/pokeData';
import { PokemonListService } from '../services/pokemon-list.service';

@Component({
  selector: 'app-pokedex-details',
  templateUrl: './pokedex-details.component.html',
  styleUrls: ['./pokedex-details.component.scss'],
})
export class PokedexDetailsComponent implements OnInit {
  // INFO Maximum base stat is 255
  // https://bulbapedia.bulbagarden.net/wiki/Base_stats
  private MAX_BASE_STAT = 255;
  pokemon?: PokeDetails;

  constructor(private service: PokemonListService) {}

  ngOnInit(): void {
    this.service.getSelectedPokemon().subscribe((selected) => {
      this.pokemon = selected;
    });
  }

  protected calculateBaseStatPercentage = (baseStat: number): number =>
    Math.ceil((baseStat * 100) / this.MAX_BASE_STAT);
}
