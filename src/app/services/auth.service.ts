import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-auth-button',
  template: '<button (click)="loginWithRedirect()">Log in</button>'
})
@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor() { }
}
