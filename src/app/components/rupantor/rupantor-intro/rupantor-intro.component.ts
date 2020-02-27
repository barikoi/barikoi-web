import { Component, OnInit, ViewChild, Directive } from '@angular/core';
import { trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-rupantor-intro',
  templateUrl: './rupantor-intro.component.html',
  styleUrls: ['./rupantor-intro.component.scss']
})

// @Directive({ selector: '[]')

export class RupantorIntroComponent implements OnInit {


  story1 = true;
  story2 = false;
  story3 = false;

  boxFinal = false;
  progressBar = false;

  // @ViewChild('stp1') private someName;
  constructor() { }


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }

  ngOnInit() {
    this.worker();
  }

  worker() {
    console.log('lol what?');

    setTimeout( () => {
      this.story1 = false;
      this.story2 = true;

    }, 4000);
    setTimeout( () => {
      this.story2 = false;
      this.story3 = true;
    }, 8000);

    setTimeout( () => {


      this.boxFinal = true;
    }, 9000);

    setTimeout( () => {


      this.progressBar = true;
    }, 11000);

    // setTimeout( () => {
    //   // document.querySelector('#stp1').style.visib
    // }, 2200);
  }

}
