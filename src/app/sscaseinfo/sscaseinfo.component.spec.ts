import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SscaseinfoComponent } from './sscaseinfo.component';

describe('SscaseinfoComponent', () => {
  let component: SscaseinfoComponent;
  let fixture: ComponentFixture<SscaseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SscaseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SscaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
