import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mural3DetailsComponent } from './mural3-details.component';

describe('Mural3DetailsComponent', () => {
  let component: Mural3DetailsComponent;
  let fixture: ComponentFixture<Mural3DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mural3DetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mural3DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
