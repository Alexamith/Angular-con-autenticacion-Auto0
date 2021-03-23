import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { PreciosComponent } from './components/precios/precios.component';
import { ModuloRutas } from './routes';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { BtnLoginComponent } from './components/btn-login/btn-login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProtegidaComponent,
    PreciosComponent,
    BtnLoginComponent
  ],
  imports: [
    BrowserModule,
    ModuloRutas,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-u87qr5gx.us.auth0.com',
      clientId: 'holKM8QhBdeRrSLUQLuvRRc1DrPMiqbU'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
