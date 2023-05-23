import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';
import { PokeListEntry } from '../model/pokeData';

type PokemonResult = {
  name: string;
  url: string;
};

type ListResult = {
  results: PokemonResult[];
};

@Injectable({
  providedIn: 'root',
})
export class PokemonListService {
  private baseURL: string = '';
  private pokemonNameSet = new Set<string>();
  private pokemonList: PokeListEntry[] = [];
  private selectedPokemon = new ReplaySubject<PokeListEntry>();

  constructor(private http: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  /**
   * Fetches a list of names and urls of each pokemon respecting the offset and limits
   *
   * @param limit: the amount of pokemons to be fetched
   * @param offset: which id to start
   * @returns Observable of results found
   */
  private getPokemonListResult(
    limit: number,
    offset: number
  ): Observable<ListResult> {
    return this.http.get<ListResult>(
      `${this.baseURL}?offset=${offset}&limit=${limit}`
    );
  }

  /**
   * Gets the details for a gingle pokemon entry
   *
   * @param url the url to fetch the details
   * @returns An Observable of a PokeListEntry
   */
  private getSinglePokemonDetails(url: string): Observable<PokeListEntry> {
    return this.http
      .get<PokeListEntry>(url)
      .pipe(
        catchError(this.handleError<PokeListEntry>('getSinglePokemonDetails'))
      );
  }

  /**
   * Fetch the details for multiple pokemons and adds to the pokemonList property.
   *
   * @param list pokemons list which the details will be fetched
   */
  private getPokemonsDetails(list: ListResult) {
    const requests: Observable<PokeListEntry>[] = [];
    list.results.forEach((p) => {
      if (!this.pokemonNameSet.has(p.name)) {
        requests.push(this.getSinglePokemonDetails(p.url));
      }
    });
    // Avoid wrong order keeping requests parallel
    forkJoin(requests).subscribe((pokemonList) => {
      this.pokemonList.push(...pokemonList);
    });
  }

  /**
   * Handle Http operation that failed
   * Allowing the app to continue.
   *
   * @param operation: name of the operation that failed.
   * @param result: optional value to return as the observable result
   * */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** GET current list of available pokemons */
  getCurrentPokemonList() {
    return this.pokemonList;
  }

  /**
   * GET Pokemon list from pokeapi and add to the current pokemon list
   *
   * @param limit: the amount of pokemons to be fetched
   * */
  fetchAndAddPokemonList(limit: number): PokeListEntry[] {
    const offset = this.pokemonList.length;
    const results = this.getPokemonListResult(limit, offset).pipe(
      catchError(this.handleError<ListResult>('getPokemonResultList'))
    );
    results.subscribe((result) => this.getPokemonsDetails(result));
    this.selectedPokemon.next(this.pokemonList[0]);
    return this.pokemonList;
  }

  /**
   * GET the currently selected pokemon
   *
   * @returns pokemon entry if the id is valid or null if isn't valid
   */
  getSelectedPokemon(): Observable<PokeListEntry> {
    return this.selectedPokemon;
  }

  /**
   * SET the selected pokemon based on its id.
   *
   * @param id: pokemon id
   * @throws {Error} when an invalid id is provided
   */
  setSelectedPokemon(id: number) {
    const index = id - 1;
    if (index >= 0 && this.pokemonList.length > index)
      this.selectedPokemon.next(this.pokemonList[index]);
    else throw Error('Invalid id');
  }
}
