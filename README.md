# Lab 6

## Not found
- Add an extra component in sharedComponents: `NotFoundcomponent`, add a page not found message in the template
-  Add a wildcard route to the AppRoutingModule that redirects to the notFoundComponent.
-  don't forget to replace the driverOverviewContainer with the `<router-outlet></router-outlet>`

## Driver module
- Add two routes in a feature routing module `app/features/driver/driver-routing.module.ts` 
  - overview -> DriverOverviewContainer
  - :permanentNumber -> DriverDetailContainer (needs to be generated)
- add a method `getDriverByNumber` to the driverRepo to get a driver by their drivernumber ex. `http://localhost:3000/drivers?permanentNumber=33` will give you Max Verstappen.
- In the DriverDetailContainer subscribe to the Parammap to get the number and then assign the repo's newly created method to an observable.
- Show all the related data in the template of this container.
- When clicking on a driver on the overview, navigate to the detail with the drivernumber via the componentclass

## Admin module
- Add an extra featureModule `admin` with it's own routeModule
  - login -> loginContainer (needs to be generated)
  - manage-drivers -> ManageDriversContainer (needs to be generated)

- Add a simple button on the login page that sets a `isloggedIn` property to true on a LoginService (generate this one)
- Use the `RouterLink` and `RouterlinkActive` directives to implement the menu (throw away old logic).
- Admin should link to the manage-drivers route.
- Add a guard to the admin route that checks if the `LoginService.isLoggedIn === true` if not, navigate to login.

## Bonus: try setting up lazy-loading for both driver and admin module
docs: https://angular.io/guide/lazy-loading-ngmodules
