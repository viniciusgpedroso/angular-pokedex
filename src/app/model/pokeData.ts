export type TypeEntry = {
  name: PokeType;
  url: string;
};

export type PokeTypesEntry = {
  slot: number;
  type: TypeEntry;
};

export type PokeListEntry = {
  id: number;
  name: string;
  types: PokeTypesEntry[];
};

export type PokeSprite = {
  front_default: string;
};

export type PokeStat = {
  name: string;
  url: string;
};

export type PokeBaseStat = {
  base_stat: number;
  stat: PokeStat;
};

export interface PokeDetails extends PokeListEntry {
  sprites: PokeSprite;
  stats: PokeBaseStat[];
  weight: number;
  height: number;
}

export enum PokeType {
  BUG = 'bug',
  DARK = 'dark',
  DRAGON = 'dragon',
  ELECTRIC = 'electric',
  FAIRY = 'fair',
  FIRE = 'fire',
  FIGHTING = 'fighting',
  FLYING = 'flying',
  GHOST = 'ghost',
  GRASS = 'grass',
  GROUND = 'ground',
  ICE = 'ice',
  NORMAL = 'normal',
  POISON = 'poison',
  PSYCHIC = 'psychic',
  ROCK = 'rock',
  STEEL = 'steel',
  WATER = 'water',
}
