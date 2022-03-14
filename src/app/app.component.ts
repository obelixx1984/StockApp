import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks: Array<StockInterface> = [];

  constructor(private service: StocksService) {
    this.service.load(['TWTR']).subscribe((stocks) => {
      this.stocks = stocks;
    });
  }
}
