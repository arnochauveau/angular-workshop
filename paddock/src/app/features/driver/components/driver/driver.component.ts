import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TrackByFunction } from '@angular/core';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnChanges {
  @Input() driver: Driver | null = null;
  @Output() driverClicked = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
