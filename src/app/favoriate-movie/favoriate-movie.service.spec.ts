/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FavoriateMovieService } from './favoriate-movie.service';

describe('FavoriateMovieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriateMovieService]
    });
  });

  it('should ...', inject([FavoriateMovieService], (service: FavoriateMovieService) => {
    expect(service).toBeTruthy();
  }));
});
