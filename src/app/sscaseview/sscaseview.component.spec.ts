import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SscaseviewComponent } from './sscaseview.component';

describe('SscaseviewComponent', () => {
  let component: SscaseviewComponent;
  let fixture: ComponentFixture<SscaseviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SscaseviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SscaseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
