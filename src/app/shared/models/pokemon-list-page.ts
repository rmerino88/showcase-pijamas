import { PokemonListItemLink } from './pokemon-list-item-link';

export interface PokemonListPage {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<PokemonListItemLink>;
}
