import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FavoriateMovieComponent} from './favoriate-movie.component';

const routes: Routes = [
  { path: '', component: FavoriateMovieComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);