# Lab 2

## manually making a SharedModule

in the `src/app` folder, make a `shared` folder with a file `shared.module.ts`

From the AppModule move the BrowserModule import to the SharedModule. Don't forget to also export it from the SharedModule.

In the AppModule import the SharedModule. 

Now everything you import and export in the SharedModule will be available in all your modules.

## Generate a feature module

run `ng g module features/driver --module=app` in your CLI. 

> `g` is the shorthand for generate, you could also shorthand the module with `m`

The cli will generate the module for you. By adding the --module flag, you specify the importing module. 

Take a look at the AppModule, the DriverModule should be imported.

## manually creating a component

remove all the code from app.component.html

In the `shared` folder create a folder `components/header`
In this folder, create 3 files: `header.component.ts`, `header.component.html` & `header.component.scss`.

Add the necessary Typescript code. **Don't forget adding it to the module declarations and export!**

In this header's template create a Title `Paddock` and two menu items: `drivers` & `admin`;

don't forget to add your header component to the `app.component.html`

```html
<app-header></app-header>
```

## Generating a component

Generate a driver component with the following command `ng g c features/driver/components/driver`

**Don't forget adding it to the module export!**

add the component to `app.component.html`

add your favorite driver to the DriverComponent's class

```ts
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
```

in the template of the DriverComponent, add an image and bind it's `src` attribute to the `image` property of the driver object. 

Add a h2 with the driver's given- and family name using interpolation

## Bonus: make a function that calculates the driver's age and add the age to the template.
## Bonus: add some styling to spice up your design.
