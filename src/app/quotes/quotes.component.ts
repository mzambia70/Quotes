import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'Let go and let God', 'J cole', 'Nassiro', new Date(2019, 1, 2)),
    new Quote(2, 'What goes around comes around', 'JID', 'jamal', new Date(2019, 1, 2)),
    new Quote(3, 'You cant eat your cake and have it', 'Ghandi', 'godana', new Date(2019, 1, 2)),
  ]

  toogleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete $ {this.quotes[index].name}`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }


  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  constructor() { }
  ngOnInit() {

  }
}
