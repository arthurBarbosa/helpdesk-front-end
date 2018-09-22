import { AuthGuard } from './component/security/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/security/login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

export const ROUTES: Routes = [
    { path : '', component: HomeComponent, canActivate:[AuthGuard] },
    { path : 'login', component: LoginComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);