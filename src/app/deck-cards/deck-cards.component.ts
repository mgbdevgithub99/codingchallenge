import { Component, OnInit } from '@angular/core';
import { DeckCardsService } from './deck-cards.service';
@Component({
  selector: 'app-deck-cards',
  templateUrl: './deck-cards.component.html',
  styleUrls: ['./deck-cards.component.css'],
  providers:[DeckCardsService],
})
export class DeckCardsComponent implements OnInit {
 	
  newdeckid:number;
  cards:any[];
  remainingflag:boolean=true;
  loading:boolean=false;
  showImg:boolean=true;
  delarImg = '';
  userImg ='';
  errorMessage: string;
  nextcard:any[];
  statusmessage:string;
  rank:number=0;

  constructor(private DeckCardsService: DeckCardsService) { }

  ngOnInit() {
  	this.getDeckId();
  		this.loading = true;
  	}
    getDeckId(){

       this.DeckCardsService.getdeckid().subscribe(
           deckid=>{
             this.newdeckid = deckid;
             console.log(this.newdeckid);
             this.getCards(this.newdeckid);
           }
        )

    }
    getCards(deckid){

		this.DeckCardsService.getCards(deckid)
    .subscribe(
        cards => {
          if(cards.remaining!=0){

            if(cards.cards[0].value == cards.cards[1].value) {
                       		
              this.getCards(deckid);
                       		
            }else{
              console.log(cards.cards[0]);
              this.cards = cards.cards;
              this.delarImg = this.cards[0].image;
              //this.userImg = this.cards[1].image;
              this.userImg = '../../assets/7.jpg';
            }

          }
          
        },
        error =>  this.errorMessage = <any>error
    );		
  }
  	getNextcard(status) {

  		this.loading = false;
      this.remainingflag=false;

      this.DeckCardsService.getNextCard(this.newdeckid).subscribe(
          nextcard=>{
         if(nextcard.remaining!=0){

             if(nextcard.cards[0].value == this.cards[0].value) {
                           
              this.getNextcard(status);
                           
            }else{
              
              this.nextcard = nextcard.cards;
              //this.delarImg = this.cards[0].image;
              this.userImg = this.nextcard[0].image;
             console.log(this.userImg);
              if(this.getValue(nextcard.cards[0].value) > this.getValue(this.cards[0].value) && status == 'high'){
                this.statusmessage = 'You Win!';
              }else
              if(this.getValue(nextcard.cards[0].value) < this.getValue(this.cards[0].value) && status == 'low'){
                this.statusmessage = 'You Win!';
              }

              else{
                  console.log(this.getValue(nextcard.cards[0].value)+'-'+this.getValue(this.cards[0].value));
                 this.statusmessage = 'Better Luck Next Time';
              }
            
            }

          }else{
           this.remainingflag=false;
           this.getDeckId();
          }
          } 
      )
    }
    tryagaincard(){
    	this.loading = false;
      this.remainingflag=true;
      this.getDeckId();

    }
    onLoad() {
    	this.loading = true;
    	console.log('Yes');
	}

  getValue(value){
      
    if(value == "ACE"){
        this.rank=1;
    }else
    if(value == "QUEEN"){
        this.rank=12;
    }else
    if(value == "KING"){
        this.rank=13;
    }else 
    if(value == "JACK"){
        this.rank=11;
    }else{
      this.rank=parseInt(value);
    }
    return this.rank;
  }

}
