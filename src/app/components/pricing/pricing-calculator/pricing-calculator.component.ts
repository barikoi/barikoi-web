import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
    selector: 'app-pricing-calculator',
    templateUrl: './pricing-calculator.component.html',
    styleUrls: ['./pricing-calculator.component.scss'],
})
export class PricingCalculatorComponent implements OnInit {
    constructor() {}

    value = 12;
    options: Options = {
        floor: 0,
        ceil: 12,
        showSelectionBar: true,
        getSelectionBarColor: (value: number): string => {
            if (value <= 3) {
                return 'red';
            }
            if (value <= 6) {
                return 'orange';
            }
            if (value <= 9) {
                return 'yellow';
            }
            return '#2AE02A';
        },
    };

    ngOnInit() {}
}
