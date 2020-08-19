import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatinfoComponent } from './subcatinfo.component';

describe('SubcatinfoComponent', () => {
  let component: SubcatinfoComponent;
  let fixture: ComponentFixture<SubcatinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
