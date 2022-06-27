import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Driver } from '../../models/driver';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent {
  @Input() driver: Driver | null = null;
  @Output() driverClicked = new EventEmitter<string>();
}
