import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  packege_name: string;
  price: string;
  limit: string;
  additional: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {packege_name: 'STARTUP', price: '2500 BDT', limit: '100000 call', additional: '0.1 BDT'},
  {packege_name: 'BUSINESS', price: '10000 BDT', limit: '400000 call', additional: '0.075 BDT'},
  {packege_name: 'GROWTH', price: '25000 BDT', limit: '1000000 call', additional: '0.05 BDT'},

];

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['packege_name', 'price', 'limit', 'additional'];
  dataSource = ELEMENT_DATA;

}
