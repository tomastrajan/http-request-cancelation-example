import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManyRequestsComponent } from './many-requests.component';

describe('ManyRequestsComponent', () => {
  let component: ManyRequestsComponent;
  let fixture: ComponentFixture<ManyRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManyRequestsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManyRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
