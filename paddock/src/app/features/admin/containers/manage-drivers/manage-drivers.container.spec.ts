import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDriversContainer } from './manage-drivers.container';

describe('ManageDriversContainer', () => {
  let component: ManageDriversContainer;
  let fixture: ComponentFixture<ManageDriversContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageDriversContainer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageDriversContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
