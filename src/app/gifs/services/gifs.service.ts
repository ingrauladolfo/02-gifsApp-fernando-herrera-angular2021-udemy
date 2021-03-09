import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiGifKey: string = 'xqLp5AIAJqsCNWf88IkbGig6e7QXfn0d';
  private _history: string[] = []
  get history(){
    return [...this._history]
  }
  searchGifs(query: string){
    query = query.trim().toLowerCase();
    if(!this._history.includes(query)){
      this._history.unshift(query);
    }
    this._history = this._history.splice(0,10);
    fetch('https://api.giphy.com/v1/gifs/search?api_key=xqLp5AIAJqsCNWf88IkbGig6e7QXfn0d&q=Dragon Ball Z&limit=10').then(resp =>)
    // console.log(this._history)
  }
  constructor() { }
}
