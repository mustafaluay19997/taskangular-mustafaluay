import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllawishsComponent } from './allawishs.component';

describe('AllawishsComponent', () => {
  let component: AllawishsComponent;
  let fixture: ComponentFixture<AllawishsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllawishsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllawishsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
