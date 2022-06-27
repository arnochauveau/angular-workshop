import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverOverviewContainer } from './driver-overview.container';

describe('DriverOverviewContainer', () => {
  let component: DriverOverviewContainer;
  let fixture: ComponentFixture<DriverOverviewContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverOverviewContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriverOverviewContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
