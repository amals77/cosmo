import { Component, OnInit } from '@angular/core';
import {Subcategory} from '../data'
import {CosmoserviceService} from '../cosmoservice.service'
import {Summer} from '../models/content';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  product: Observable<Summer[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Summer[] }>) {
      this.product = store.pipe(select('category'));
    }
  selectProduct(ProductName: string) {

    const product = new Summer();
    product.name =ProductName;
    this.service.tolsProduct(product)
    this.store.dispatch(new CategorySelected(product));

  }

  ngOnInit(): void {
    var countDownDate = new Date("AUG 31, 2020 12:00:00").getTime();
    var x = setInterval(function() {

      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  }

}
