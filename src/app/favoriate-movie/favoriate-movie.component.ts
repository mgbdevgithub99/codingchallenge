import { Component, OnInit } from '@angular/core';
import { FavoriateMovieService }       from './favoriate-movie.service';

@Component({
  selector: 'app-favoriate-movie',
  templateUrl: './favoriate-movie.component.html',
  styleUrls:['./favoriate-movie.component.css'],
  providers:[FavoriateMovieService],
})
export class FavoriateMovieComponent implements OnInit {

	movie:any=[];
	cast:any=[];
	imgUrl = 'https://image.tmdb.org/t/p/w300_and_h450_bestv2';
	constructor(private FavoriateMovieService : FavoriateMovieService) { }
	
	ngOnInit() {
		
		this.getfavoritemovie();
		this.getcasting();
  }
	getfavoritemovie() {
		
		this.FavoriateMovieService.getfavoritemovie().subscribe(

           	movie =>{
           		this.movie = movie;
           		console.log(movie);
           }
    )
	}

	getcasting() {

		this.FavoriateMovieService.getcasting().subscribe(

           	cast =>{
           		this.cast = cast.cast;
           		console.log(this.cast.profile_path);
           		this.cast.profile_path = this.imgUrl+this.cast.profile_path;
           		console.log(this.cast.profile_path);
           }
    )		
  }
}
