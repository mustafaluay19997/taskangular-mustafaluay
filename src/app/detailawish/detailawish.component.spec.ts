import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailawishComponent } from './detailawish.component';

describe('DetailawishComponent', () => {
  let component: DetailawishComponent;
  let fixture: ComponentFixture<DetailawishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailawishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailawishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
