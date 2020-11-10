import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplePhotographersComponent } from './multiple-photographers.component';

describe('MultiplePhotographersComponent', () => {
  let component: MultiplePhotographersComponent;
  let fixture: ComponentFixture<MultiplePhotographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplePhotographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplePhotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
