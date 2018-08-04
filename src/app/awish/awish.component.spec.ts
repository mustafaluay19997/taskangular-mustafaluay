import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwishComponent } from './awish.component';

describe('AwishComponent', () => {
  let component: AwishComponent;
  let fixture: ComponentFixture<AwishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
