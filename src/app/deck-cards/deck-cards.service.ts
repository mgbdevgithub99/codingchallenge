import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx'

@Injectable()
export class DeckCardsService {
	private Url = 'https://deckofcardsapi.com/api/deck/fmnibo3jm8at/draw/?count=2';  // URL to web API
	private deckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
	private deckNextcardUrl = '';
 	constructor(private http: Http) { }

	getCards (deckid): Observable<any> {
      this.Url = 'https://deckofcardsapi.com/api/deck/'+deckid+'/draw/?count=2';
    	return this.http.get(this.Url)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}
  	
  	private extractData(res: Response) {
    	let body = res.json();
    	return body || { };
    }

  	private deckData(res: Response) {
    	let body = res.json();
      console.log('New Deck');
    	console.log(body.deck_id);
    	return body.deck_id || { };
  	}

  	private handleError (error: Response | any) {
    	// In a real world app, we might use a remote logging infrastructure
    	let errMsg: string;
    	if (error instanceof Response) {
      		const body = error.json() || '';
      		const err = body.error || JSON.stringify(body);
      		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    	} else {
      		errMsg = error.message ? error.message : error.toString();
    	}
    	console.error(errMsg);
    	return Observable.throw(errMsg);
  	}

  	getdeckid(): Observable<any>{
       return this.http.get(this.deckUrl)
                    .map(this.deckData)
                    .catch(this.handleError);
    }

    getNextCard(nextdeckid): Observable<any>{
      console.log(nextdeckid);
      this.deckNextcardUrl = 'https://deckofcardsapi.com/api/deck/'+nextdeckid+'/draw/?count=1';
       return this.http.get(this.deckNextcardUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }  
}