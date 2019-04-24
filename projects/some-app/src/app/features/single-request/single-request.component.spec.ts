import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRequestComponent } from './http-client-example.component';

describe('HttpClientExampleComponent', () => {
  let component: SingleRequestComponent;
  let fixture: ComponentFixture<SingleRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleRequestComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
