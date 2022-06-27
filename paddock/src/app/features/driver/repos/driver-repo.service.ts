import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Driver } from '../models/driver';

@Injectable({
  providedIn: 'root',
})
export class DriverRepoService {
  constructor(private httpClient: HttpClient) {}

  getDrivers() {
    return this.httpClient
      .get<Driver[]>('http://localhost:3000/drivers')
      .pipe(map((drivers) => drivers.map((d) => ({ ...d, age: this.calculateAge(d.dateOfBirth) }))));
  }

  private calculateAge(dateOfBirth: string): string {
    const birthDate = new Date(dateOfBirth);
    const now = new Date();

    return (now.getFullYear() - birthDate.getFullYear()).toString();

  }
}
