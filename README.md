# Lab 5

## setup

before getting started with this lab, you will have to run `npm install` again. We've added a new dependency for our 'backend'.

please run the backend by running `npm run super-real-backend`

navigating to `http://localhost:3000/drivers` should now give you a JSON response.


## HttpService
generate a new service in the `app/features/driver/repos/driver-repo` folder. 

Add the HttpClient module to the sharedModule. 

Add code to the service to get the drivers from `http://localhost:3000/drivers`. with a method `getDrivers()`
## container changes

remove the drivers property from the container. 

inject the `DriverRepoService` and assign an observable property to it.
don't subscribe to it but instead use the async pipe in the *ngFor.

## component changes

remove the AgePipe, as we don't want to do that calculation on each change detection cycle.

Instead move the calculation to the HttpService. use .pipe and the `map` operator for this.

## Bonus: write a HTTP interceptor that logs the outgoing request and the incoming response.
