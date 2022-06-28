import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverDetailContainer } from './driver-detail.container';

describe('DriverDetailContainer', () => {
  let component: DriverDetailContainer;
  let fixture: ComponentFixture<DriverDetailContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverDetailContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverDetailContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
