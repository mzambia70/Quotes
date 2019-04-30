import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    quote=[
        new Quote(1,'look before you leap','mohamed'),
        new Quote(2,'time waits for no man','tupac ')
    ]

    constructor(){

    }


}