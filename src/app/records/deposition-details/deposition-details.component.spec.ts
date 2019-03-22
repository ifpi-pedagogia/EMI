import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionDetailsComponent } from './deposition-details.component';

describe('DepositionDetailsComponent', () => {
  let component: DepositionDetailsComponent;
  let fixture: ComponentFixture<DepositionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
