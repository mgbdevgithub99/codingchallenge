import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeckCardsComponent } from './deck-cards.component';
import { deckcardsrouting } from './deck-cards.routing';
@NgModule({
  imports: [
    CommonModule,
    deckcardsrouting
  ],
  declarations: [DeckCardsComponent]
})
export class DeckCardsModule { }
