import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {FavoriateMovieComponent} from './favoriate-movie/favoriate-movie.component';
//import {DeckCardsComponent} from './deck-cards/deck-cards.component';
const appRoutes: Routes = [

  {
    path: 'deckcards',
   // component: DeckCardsComponent,
    /*outlet: 'popup'*/
    loadChildren: './deck-cards/deck-cards.module#DeckCardsModule',
  },
  
  {
    path: 'favoriatemovie',
    //component:FavoriateMovieComponent
    loadChildren: './favoriate-movie/favoriate-movie.module#FavoriateMovieModule',
    //data: { preload: true }/**/
    /*canLoad: [AuthGuard]*/


  },
  /*
  {
    path: 'crisis-center', 
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  */
 // { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
 /* { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
/*{ preloadingStrategy: SelectivePreloadingStrategy }*/
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    /*CanDeactivateGuard,
    SelectivePreloadingStrategy*/
  ]
})
export class AppRoutingModule {}
