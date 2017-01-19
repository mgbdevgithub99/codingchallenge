/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DeckCardsService } from './deck-cards.service';

describe('DeckCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeckCardsService]
    });
  });

  it('should ...', inject([DeckCardsService], (service: DeckCardsService) => {
    expect(service).toBeTruthy();
  }));
});
