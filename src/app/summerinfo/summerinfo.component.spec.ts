import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummerinfoComponent } from './summerinfo.component';

describe('SummerinfoComponent', () => {
  let component: SummerinfoComponent;
  let fixture: ComponentFixture<SummerinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummerinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
