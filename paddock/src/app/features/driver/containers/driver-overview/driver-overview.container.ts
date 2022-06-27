import { Component } from '@angular/core';
import { Driver } from '../../models/driver';
import { DriverRepoService } from '../../repos/driver-repo.service';

@Component({
  selector: 'app-driver-overview',
  templateUrl: './driver-overview.container.html',
  styleUrls: ['./driver-overview.container.scss']
})
export class DriverOverviewContainer {

  drivers$ = this.driverRepo.getDrivers();

  constructor(private driverRepo: DriverRepoService){}

  onDriverClicked(permanentNumber: string) {
    window.alert(`driver #${permanentNumber} clicked.`);
  }

  trackByCode(index: number, driver: Driver) {
    return driver.code;
  }
}
