import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatviewComponent } from './subcatview.component';

describe('SubcatviewComponent', () => {
  let component: SubcatviewComponent;
  let fixture: ComponentFixture<SubcatviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcatviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
