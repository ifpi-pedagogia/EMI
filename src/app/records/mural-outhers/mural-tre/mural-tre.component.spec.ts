import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralTreComponent } from './mural-tre.component';

describe('MuralTreComponent', () => {
  let component: MuralTreComponent;
  let fixture: ComponentFixture<MuralTreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuralTreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuralTreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
