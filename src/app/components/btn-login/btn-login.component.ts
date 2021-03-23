import { Component } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  template: '<button class ="btn btn-primary" (click)="auth.loginWithRedirect()">Log in</button>'
})

export class BtnLoginComponent {

  constructor(public auth: AuthService) {}

}
