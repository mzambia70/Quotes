import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
    quote=[
        new Quote(1,'time waits for no man','mohamed'),
        new Quote(2,'look before you leap','tupac'),
    ]

    toogleDetails(index){
        this.quote[index].showDescription=!this.quote[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }

}
