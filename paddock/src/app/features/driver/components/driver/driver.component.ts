import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent{
  driver = {
    driverId: 'norris',
    permanentNumber: '4',
    code: 'NOR',
    url: 'http://en.wikipedia.org/wiki/Lando_Norris',
    givenName: 'Lando',
    familyName: 'Norris',
    dateOfBirth: '1999-11-13',
    nationality: 'British',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lando_Norris_Formula_1_Driver_%2849379469418%29_%28cropped%29_%28cropped%29.jpg/440px-Lando_Norris_Formula_1_Driver_%2849379469418%29_%28cropped%29_%28cropped%29.jpg'
  };

  getAge(driver: any) {
    const birthDate = new Date(driver.dateOfBirth);
    const now = new Date();

    return now.getFullYear() - birthDate.getFullYear();
  }

}
