# Lab 7

## loginform

- In the loginContainer, add a login form with username and password fields. 
- Both fields should be required.
- The existing login button should be disabled as long as the form is invalid.
- in the loginservice change the `login` method so that it expects a username and a password.
- only login if the username and password are `admin` otherwise show a window.alert with `wrong username/password`

## manage-drivers 
- in the manage drivers container, add a form to add a new driver.
```
driverId: required
permanentNumber: required
code: required
url: required
image: required
givenName: required
familyName: required
dateOfBirth: required
nationality: required
```
- for image and url add a `Validators.pattern` validator to check if the url is valid with a regex
- Show a message 'invalid url' beneath url or image only when the url is not valid (not for required)
- add a button to the form that is disabled for invalid forms.
- the button should send the form contents with a POST to `http://localhost:3000/drivers` via the driver-repo service.
- when the call succeeds, the app should navigate to the drivers-overview to show our new driver.
