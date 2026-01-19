import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe,
  SlicePipe, DecimalPipe, PercentPipe, JsonPipe, TitleCasePipe, 
  AsyncPipe
 } from '@angular/common';
 import {interval} from 'rxjs';
 import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    SlicePipe,
    DecimalPipe,
    PercentPipe,
    JsonPipe,
    TitleCasePipe,
    AsyncPipe
],
  templateUrl: './pipes-demo.html',
  styleUrl: './pipes-demo.css',
})
export class PipesDemo {
  presentDate = new Date();
  name = 'Juan Paolo C. Vivas'
  price = 20000;
  Fruits = ["Watermelon", "Dragonfruit", "Apple", "Kiwi", "Orange", "Pomegranate"];
  decimalNuml = 8.7589623;
  decimalNum2 = 5.43;
  percentNum1 = 0.2026;
  object = {sky: 'clouds', element: 'fire', candy: {chocolates: ['kisses','toblerone','goya','cloud9']}};
  time$ = interval(1000).pipe(map(() => new Date()));
}
