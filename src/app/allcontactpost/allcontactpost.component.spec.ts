import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcontactpostComponent } from './allcontactpost.component';

describe('AllcontactpostComponent', () => {
  let component: AllcontactpostComponent;
  let fixture: ComponentFixture<AllcontactpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcontactpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcontactpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
