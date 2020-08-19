import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseinfoComponent } from './showcaseinfo.component';

describe('ShowcaseinfoComponent', () => {
  let component: ShowcaseinfoComponent;
  let fixture: ComponentFixture<ShowcaseinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcaseinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcaseinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
