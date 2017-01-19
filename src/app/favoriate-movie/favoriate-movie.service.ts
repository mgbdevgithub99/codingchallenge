import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class FavoriateMovieService {
	private api_key = '99db2979275fb0f5e60a3f4ac04e0a49';
	private movieUrl = 'https://api.themoviedb.org/3/movie/1402?api_key='+this.api_key;  // URL to web API
	private castingUrl = 'https://api.themoviedb.org/3/movie/1402/casts?api_key='+this.api_key;

  	constructor(private http: Http) { }

    getfavoritemovie(): Observable<any> {

       	return this.http.get(this.movieUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getcasting(): Observable<any> {

       	return this.http.get(this.castingUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
  	private handleError (error: Response | any) {
    	
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
	private extractData(res: Response) {
		
    	let body = res.json();
    	console.log(body);
    	return body;
    }	  	   

}
