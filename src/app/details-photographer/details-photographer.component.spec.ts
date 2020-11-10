import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPhotographerComponent } from './details-photographer.component';

describe('DetailsPhotographerComponent', () => {
  let component: DetailsPhotographerComponent;
  let fixture: ComponentFixture<DetailsPhotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPhotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPhotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
