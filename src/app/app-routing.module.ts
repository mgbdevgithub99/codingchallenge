import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [

  {
    path: 'deckcards',
    loadChildren: './deck-cards/deck-cards.module#DeckCardsModule',
  },
  
  {
    path: 'favoriatemovie',
    loadChildren: './favoriate-movie/favoriate-movie.module#FavoriateMovieModule',
  },
  
];

@NgModule({

  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule {}
