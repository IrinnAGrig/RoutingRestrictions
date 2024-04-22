import {
    ActivatedRouteSnapshot,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class LoginGuard {
    constructor(private router: Router) { }
    canActivateChild(
        route: ActivatedRouteSnapshot,
    ):
        | boolean {
        let data = localStorage.getItem('existUser');
        let role = route.data['role'];


        let isLoged;
        if (data)
            isLoged = JSON.parse(data);
        else
            isLoged = false;

        let redirect = false;

        if (!role.includes(isLoged)) {
            redirect = true;
        }
        if (!redirect) {
            return true;
        } else {
            this.router.navigate(['/login']);
            return false;
        }

    }
}