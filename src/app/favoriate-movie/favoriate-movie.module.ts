import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriateMovieComponent } from './favoriate-movie.component';
import { routing } from './favoriate-movie.routing';
@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [FavoriateMovieComponent]
})
export class FavoriateMovieModule { }
