import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPayementComponent } from './event-payement.component';

describe('EventPayementComponent', () => {
  let component: EventPayementComponent;
  let fixture: ComponentFixture<EventPayementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventPayementComponent]
    });
    fixture = TestBed.createComponent(EventPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
