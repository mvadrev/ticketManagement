import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeocomplyAppealComponent } from './geocomply-appeal.component';

describe('GeocomplyAppealComponent', () => {
  let component: GeocomplyAppealComponent;
  let fixture: ComponentFixture<GeocomplyAppealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeocomplyAppealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeocomplyAppealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
