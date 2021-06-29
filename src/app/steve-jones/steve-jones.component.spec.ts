import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteveJonesComponent } from './steve-jones.component';

describe('SteveJonesComponent', () => {
  let component: SteveJonesComponent;
  let fixture: ComponentFixture<SteveJonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteveJonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SteveJonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
