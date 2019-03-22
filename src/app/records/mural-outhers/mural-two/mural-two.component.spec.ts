import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralTwoComponent } from './mural-two.component';

describe('MuralTwoComponent', () => {
  let component: MuralTwoComponent;
  let fixture: ComponentFixture<MuralTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
