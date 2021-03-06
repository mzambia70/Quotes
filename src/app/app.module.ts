import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import {DateCountPipe} from './date-count.pipe';
//import {TimeAgo} from './time-ago.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DateCountPipe,
    //TimeAgo,
    QuoteDetailsComponent,
    HighlightDirective,
    QuoteFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
