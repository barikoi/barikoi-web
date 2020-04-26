import { Component, OnInit } from '@angular/core';
import { BkoiCloudService } from '../../services/bkoi-cloud.service'







@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  private api_dash

  displayedColumns: string[] = ['name', 'usage'];
  dataSource;

  constructor(private cloudService: BkoiCloudService) { }

  ngOnInit() {
    this.cloudService.get_user_api_data().subscribe(
      data => {
        let ELEMENT_DATA= []
        console.log('dd')
        this.api_dash = data
        ELEMENT_DATA.push({'name': 'Autocomplete', 'usage': data[0].autocomplete_count})
        ELEMENT_DATA.push({'name': 'ReverseGeo', 'usage': data[0].reverse_geo_code_count})
        ELEMENT_DATA.push({'name': 'Geocode', 'usage': data[0].geo_code_count})
        ELEMENT_DATA.push({'name': 'Nearby', 'usage': data[0].nearby_count})
        ELEMENT_DATA.push({'name': 'Distance', 'usage': data[0].distance_count})
        ELEMENT_DATA.push({'name': 'Ruapantor', 'usage': data[0].rupantor_batchgeo_count})

        this.dataSource = ELEMENT_DATA;
      }
    )
  }


}
