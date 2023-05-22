export type TypeEntry = {
  name: PokeType;
  url: string;
};

export type PokeTypesEntry = {
  slot: number;
  type: TypeEntry;
};

export type PokeListEntry = {
  id: Number;
  name: string;
  types: PokeTypesEntry[];
};

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
