import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-nearby-ptypes',
  templateUrl: './search-nearby-ptypes.component.html',
  styleUrls: ['./search-nearby-ptypes.component.scss']
})
export class SearchNearbyPtypesComponent implements OnInit {

  @Output() nearbyTypeSelectEvent: EventEmitter<any> = new EventEmitter();

  emitNearbyType(type) {
    this.nearbyTypeSelectEvent.emit(type);
  }

  constructor() { }

  ngOnInit() {
  }

}
