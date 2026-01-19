import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Myservice } from './myservice';
import { DatePipe } from '@angular/common';
import { NewCmp } from './new-cmp/new-cmp';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, NewCmp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-services-demo');

  todaydate;
  componentproperty;
  constructor(private myservice: Myservice) {
    this.todaydate = this.myservice.showTodayDate()
    this.componentproperty = this.myservice.serviceproperty;
  }
}
