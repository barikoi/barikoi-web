import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BkoiAddressVerifyComponent } from './bkoi-address-verify.component';

describe('BkoiAddressVerifyComponent', () => {
  let component: BkoiAddressVerifyComponent;
  let fixture: ComponentFixture<BkoiAddressVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BkoiAddressVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BkoiAddressVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
