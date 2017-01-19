import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// { FavoriateMovieModule } from './favoriate-movie/favoriate-movie.module';
import { DeckCardsModule } from './deck-cards/deck-cards.module';
import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //FavoriateMovieModule,
    AppRoutingModule,
    DeckCardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
