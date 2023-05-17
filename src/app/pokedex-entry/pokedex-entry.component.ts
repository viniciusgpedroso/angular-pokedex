import { Component, Input } from '@angular/core';
import { PokeListEntry, PokeType } from '../model/pokeData';

@Component({
  selector: 'app-pokedex-entry',
  templateUrl: './pokedex-entry.component.html',
  styleUrls: ['./pokedex-entry.component.scss'],
})
export class PokedexEntryComponent {
  @Input() pokemon?: PokeListEntry;
  @Input() selected: boolean = false;
}
