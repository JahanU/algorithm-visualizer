import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingAlgorithmsComponent } from './searching-algorithms.component';

describe('SearchingAlgorithmsComponent', () => {
  let component: SearchingAlgorithmsComponent;
  let fixture: ComponentFixture<SearchingAlgorithmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchingAlgorithmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchingAlgorithmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
