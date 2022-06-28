import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Driver } from '../../models/driver';
import { DriverRepoService } from '../../repos/driver-repo.service';

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.container.html',
  styleUrls: ['./driver-detail.container.scss'],
})
export class DriverDetailContainer implements OnInit {
  driverDetail$: Observable<Driver> | null = null;

  constructor(
    private route: ActivatedRoute,
    private driverRepo: DriverRepoService
  ) {}

  ngOnInit(): void {
    this.driverDetail$ = this.route.paramMap.pipe(
      filter((params) => params.has('permanentNumber')),
      map((params) => params.get('permanentNumber')),
      switchMap((driverNumber) =>
        this.driverRepo.getDriverByNumber(driverNumber!)
      )
    );
  }
}
