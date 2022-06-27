# Lab 3

# property binding

in the driverComponent, on the image, replace the interpolation of the src attribute of the image with an property binding.

# event binding

on the header component, add a property `adminClicked = false;`

add a click event on the admin menu item.

When the item is clicked show an alert with `window.alert('access denied')` and set adminClicked to true.

# hiding and showing.

Add an `*ngIf` directive to the admin menu item so that it only shows when adminClicked equals to false.

# ngFor

rename the `driver` property to `drivers` and assign it to:

```ts
drivers = [
    {
        driverId: 'albon',
        permanentNumber: '23',
        code: 'ALB',
        url: 'http://en.wikipedia.org/wiki/Alexander_Albon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Alex_albon_%2851383514844%29_%28cropped%29.jpg/420px-Alex_albon_%2851383514844%29_%28cropped%29.jpg',
        givenName: 'Alexander',
        familyName: 'Albon',
        dateOfBirth: '1996-03-23',
        nationality: 'Thai',
    },
    {
        driverId: 'alonso',
        permanentNumber: '14',
        code: 'ALO',
        url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Alonso_2016.jpg/480px-Alonso_2016.jpg',
        givenName: 'Fernando',
        familyName: 'Alonso',
        dateOfBirth: '1981-07-29',
        nationality: 'Spanish',
    },
    {
        driverId: 'bottas',
        permanentNumber: '77',
        code: 'BOT',
        url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/F12019_Schloss_Gabelhofen_%2820%29_%28cropped%29.jpg/440px-F12019_Schloss_Gabelhofen_%2820%29_%28cropped%29.jpg',
        givenName: 'Valtteri',
        familyName: 'Bottas',
        dateOfBirth: '1989-08-28',
        nationality: 'Finnish',
    },
    {
        driverId: 'gasly',
        permanentNumber: '10',
        code: 'GAS',
        url: 'http://en.wikipedia.org/wiki/Pierre_Gasly',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Pierre_Gasly_2017_Malaysia.jpg/440px-Pierre_Gasly_2017_Malaysia.jpg',
        givenName: 'Pierre',
        familyName: 'Gasly',
        dateOfBirth: '1996-02-07',
        nationality: 'French',
    },
    {
        driverId: 'hamilton',
        permanentNumber: '44',
        code: 'HAM',
        url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/440px-Lewis_Hamilton_2016_Malaysia_2.jpg',
        givenName: 'Lewis',
        familyName: 'Hamilton',
        dateOfBirth: '1985-01-07',
        nationality: 'British',
    },
    {
        driverId: 'hulkenberg',
        permanentNumber: '27',
        code: 'HUL',
        url: 'http://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Nico_Hulkenberg_2016_Malaysia.jpg/440px-Nico_Hulkenberg_2016_Malaysia.jpg',
        givenName: 'Nico',
        familyName: 'Hülkenberg',
        dateOfBirth: '1987-08-19',
        nationality: 'German',
    },
    {
        driverId: 'latifi',
        permanentNumber: '6',
        code: 'LAT',
        url: 'http://en.wikipedia.org/wiki/Nicholas_Latifi',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Nicholas_Latifi_-_2021_British_Grand_Prix_%2851349494718%29.jpg/440px-Nicholas_Latifi_-_2021_British_Grand_Prix_%2851349494718%29.jpg',
        givenName: 'Nicholas',
        familyName: 'Latifi',
        dateOfBirth: '1995-06-29',
        nationality: 'Canadian',
    },
    {
        driverId: 'leclerc',
        permanentNumber: '16',
        code: 'LEC',
        url: 'http://en.wikipedia.org/wiki/Charles_Leclerc',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Charles-Leclerc.jpg/440px-Charles-Leclerc.jpg',
        givenName: 'Charles',
        familyName: 'Leclerc',
        dateOfBirth: '1997-10-16',
        nationality: 'Monegasque',
    },
    {
        driverId: 'kevin_magnussen',
        permanentNumber: '20',
        code: 'MAG',
        url: 'http://en.wikipedia.org/wiki/Kevin_Magnussen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Kevin_Magnussen%2C_2019_Formula_One_Tests_Barcelona_%28cropped%29.jpg/440px-Kevin_Magnussen%2C_2019_Formula_One_Tests_Barcelona_%28cropped%29.jpg',
        givenName: 'Kevin',
        familyName: 'Magnussen',
        dateOfBirth: '1992-10-05',
        nationality: 'Danish',
    },
    {
        driverId: 'norris',
        permanentNumber: '4',
        code: 'NOR',
        url: 'http://en.wikipedia.org/wiki/Lando_Norris',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Lando_Norris_Formula_1_Driver_%2849379469418%29_%28cropped%29_%28cropped%29.jpg/440px-Lando_Norris_Formula_1_Driver_%2849379469418%29_%28cropped%29_%28cropped%29.jpg',
        givenName: 'Lando',
        familyName: 'Norris',
        dateOfBirth: '1999-11-13',
        nationality: 'British',
    },
    {
        driverId: 'ocon',
        permanentNumber: '31',
        code: 'OCO',
        url: 'http://en.wikipedia.org/wiki/Esteban_Ocon',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Esteban_Ocon_2017_Malaysia_1.jpg/440px-Esteban_Ocon_2017_Malaysia_1.jpg',
        givenName: 'Esteban',
        familyName: 'Ocon',
        dateOfBirth: '1996-09-17',
        nationality: 'French',
    },
    {
        driverId: 'perez',
        permanentNumber: '11',
        code: 'PER',
        url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Sergio_P%C3%A9rez_2019_%28cropped%29.jpg/440px-Sergio_P%C3%A9rez_2019_%28cropped%29.jpg',
        givenName: 'Sergio',
        familyName: 'Pérez',
        dateOfBirth: '1990-01-26',
        nationality: 'Mexican',
    },
    {
        driverId: 'ricciardo',
        permanentNumber: '3',
        code: 'RIC',
        url: 'http://en.wikipedia.org/wiki/Daniel_Ricciardo',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/F12019_Schloss_Gabelhofen_%2818%29.jpg/440px-F12019_Schloss_Gabelhofen_%2818%29.jpg',
        givenName: 'Daniel',
        familyName: 'Ricciardo',
        dateOfBirth: '1989-07-01',
        nationality: 'Australian',
    },
    {
        driverId: 'russell',
        permanentNumber: '63',
        code: 'RUS',
        url: 'http://en.wikipedia.org/wiki/George_Russell_%28racing_driver%29',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/George_Russell%2C_Silverstone_2021_%2851350033659%29_%28cropped%29.jpg/470px-George_Russell%2C_Silverstone_2021_%2851350033659%29_%28cropped%29.jpg',
        givenName: 'George',
        familyName: 'Russell',
        dateOfBirth: '1998-02-15',
        nationality: 'British',
    },
    {
        driverId: 'sainz',
        permanentNumber: '55',
        code: 'SAI',
        url: 'http://en.wikipedia.org/wiki/Carlos_Sainz_Jr.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Formel12021-SchlossGabelhofen%2815%29_%28cropped%29.jpg/500px-Formel12021-SchlossGabelhofen%2815%29_%28cropped%29.jpg',
        givenName: 'Carlos',
        familyName: 'Sainz',
        dateOfBirth: '1994-09-01',
        nationality: 'Spanish',
    },
    {
        driverId: 'mick_schumacher',
        permanentNumber: '47',
        code: 'MSC',
        url: 'http://en.wikipedia.org/wiki/Mick_Schumacher',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mick_Schumacher_-_2019202181015_2019-07-21_Champions_for_Charity_-_1500_-_B70I1535.jpg/440px-Mick_Schumacher_-_2019202181015_2019-07-21_Champions_for_Charity_-_1500_-_B70I1535.jpg',
        givenName: 'Mick',
        familyName: 'Schumacher',
        dateOfBirth: '1999-03-22',
        nationality: 'German',
    },
    {
        driverId: 'stroll',
        permanentNumber: '18',
        code: 'STR',
        url: 'http://en.wikipedia.org/wiki/Lance_Stroll',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Lance_Stroll_2017_Malaysia_2.jpg/360px-Lance_Stroll_2017_Malaysia_2.jpg',
        givenName: 'Lance',
        familyName: 'Stroll',
        dateOfBirth: '1998-10-29',
        nationality: 'Canadian',
    },
    {
        driverId: 'tsunoda',
        permanentNumber: '22',
        code: 'TSU',
        url: 'http://en.wikipedia.org/wiki/Yuki_Tsunoda',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/2021_US_GP%2C_Tsunoda.jpg/440px-2021_US_GP%2C_Tsunoda.jpg',
        givenName: 'Yuki',
        familyName: 'Tsunoda',
        dateOfBirth: '2000-05-11',
        nationality: 'Japanese',
    },
    {
        driverId: 'max_verstappen',
        permanentNumber: '33',
        code: 'VER',
        url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Max_Verstappen_2017_Malaysia_3.jpg/440px-Max_Verstappen_2017_Malaysia_3.jpg',
        givenName: 'Max',
        familyName: 'Verstappen',
        dateOfBirth: '1997-09-30',
        nationality: 'Dutch',
    },
    {
        driverId: 'vettel',
        permanentNumber: '5',
        code: 'VET',
        url: 'http://en.wikipedia.org/wiki/Sebastian_Vettel',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Sebastian_Vettel_2015_Malaysia_podium_1.jpg/440px-Sebastian_Vettel_2015_Malaysia_podium_1.jpg',
        givenName: 'Sebastian',
        familyName: 'Vettel',
        dateOfBirth: '1987-07-03',
        nationality: 'German',
    },
    {
        driverId: 'zhou',
        permanentNumber: '24',
        code: 'ZHO',
        url: 'http://en.wikipedia.org/wiki/Guanyu_Zhou',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ZhouGuanyu-Shy.jpg/500px-ZhouGuanyu-Shy.jpg',
        givenName: 'Guanyu',
        familyName: 'Zhou',
        dateOfBirth: '1999-05-30',
        nationality: 'Chinese',
    },
];
```
now use the *ngFor directive to repeat our `<div class="driver">` for every driver.
Make sure it is performant for possible larger datasets.

## built-in pipes

use a built-in pipe to uppercase the family name of the drivers

## custom pipes

move the age calculation logic to a pipe.
