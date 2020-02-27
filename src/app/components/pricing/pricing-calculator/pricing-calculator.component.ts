import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
    selector: 'app-pricing-calculator',
    templateUrl: './pricing-calculator.component.html',
    styleUrls: ['./pricing-calculator.component.scss'],
})
export class PricingCalculatorComponent implements OnInit {

    constructor() {}

    upFrontPrice = 4000;
    payAsYouGoPrice = 5000;

    value = 100000;
    options: Options = {
        floor: 100000,
        ceil: 800000,
        showSelectionBar: true,
        getSelectionBarColor: (value: number): string => {
            return '#3CB4BE';
        },
        translate: value => {
            return value + ' Requests';
        },
    };

    onSlideChange(event) {
        this.upFrontPrice = Math.round(event.value * 0.04);
        this.payAsYouGoPrice = Math.round(event.value * 0.05);
    }

    ngOnInit() {}
}
