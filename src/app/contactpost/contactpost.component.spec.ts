import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactpostComponent } from './contactpost.component';

describe('ContactpostComponent', () => {
  let component: ContactpostComponent;
  let fixture: ComponentFixture<ContactpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
