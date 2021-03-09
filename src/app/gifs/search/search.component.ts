import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;
  constructor(private gifsService: GifsService){}
  search(){
    // console.log(term)
    // console.log(this.txtSearch)
    const value = this.txtSearch.nativeElement.value;
    if(value.trim().length === 0 ){
      return;
    }
    this.txtSearch.nativeElement.value = '';
   this.gifsService.searchGifs(value)
  }

}
