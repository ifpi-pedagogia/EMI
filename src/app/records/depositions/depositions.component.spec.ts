import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsComponent } from './depositions.component';

describe('DepositionsComponent', () => {
  let component: DepositionsComponent;
  let fixture: ComponentFixture<DepositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
