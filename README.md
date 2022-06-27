# Lab 4

## Container

generate a new Container in the folder `src/app/features/driver/containers/driver-overview-container`

move the drivers property to this new container.

Remove the `driverComponent` from the export in the `driverModule` instead add the `DriverOverviewContainer`

Add the container to the AppComponent's template instead of the driverComponent.

## Component

add an input `driver` hook up the template to this input. remove the ngFor again as this has to be moved to the container.

Add an output `driverClicked`

when the driver is clicked, emit a driverClicked event with the driver's permanentNumber as a parameter.

In the Container, show an alert when a driverClicked event is emitted `driver <permanentNumber> clicked`

## lifecycle hooks

on changes of the component, log the simpleChanges parameter of the hook so you can inspect it's value in the console (use `console.log()`)
