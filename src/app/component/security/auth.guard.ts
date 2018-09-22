import { SharedService } from './../../services/shared.service';
//import { Observable } from 'rxjs/observable';
import {Observable,of, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate,Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate{

    public shared: SharedService;

    constructor(private router: Router){
        this.shared = SharedService.getInstance();
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | boolean {
        if(this.shared.isLoggedIn()){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}