import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralOneComponent } from './mural-one.component';

describe('MuralOneComponent', () => {
  let component: MuralOneComponent;
  let fixture: ComponentFixture<MuralOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
