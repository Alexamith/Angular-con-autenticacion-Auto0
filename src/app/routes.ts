import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PreciosComponent } from './components/precios/precios.component';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precios', component: PreciosComponent },
    { path: 'protegida', component: ProtegidaComponent, canActivate:[AuthGuard] },
    { path: '**', pathMatch:'full',redirectTo:'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ModuloRutas {}
