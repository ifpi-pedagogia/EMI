import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefHistoryComponent } from './brief-history.component';

describe('BriefHistoryComponent', () => {
  let component: BriefHistoryComponent;
  let fixture: ComponentFixture<BriefHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
