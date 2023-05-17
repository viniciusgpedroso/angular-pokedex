export type PokeListEntry = {
  id: Number;
  name: string;
  types: PokeType[];
};

export enum PokeType {
  BUG = 'BUG',
  DARK = 'DARK',
  DRAGON = 'DRAGON',
  ELECTRIC = 'ELECTRIC',
  FAIRY = 'FAIRY',
  FIRE = 'FIRE',
  FIGHTING = 'FIGHTING',
  FLYING = 'FLYING',
  GHOST = 'GHOST',
  GRASS = 'GRASS',
  GROUND = 'GROUND',
  ICE = 'ICE',
  NORMAL = 'NORMAL',
  POISON = 'POISON',
  PSYCHIC = 'PSYCHIC',
  ROCK = 'ROCK',
  STEEL = 'STEEL',
  WATER = 'WATER',
}
