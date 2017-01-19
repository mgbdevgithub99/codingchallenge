import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { LazyComponent } from './lazy.component';
//import {FavoriateMovieComponent} from './favoriate-movie.component';
import {DeckCardsComponent} from './deck-cards.component';

const routes: Routes = [
  { path: '', component: DeckCardsComponent }
];

export const deckcardsrouting: ModuleWithProviders = RouterModule.forChild(routes);