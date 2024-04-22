import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class LoginService {
    users: User[] = [{
        username: "Admin",
        password: "123456",
        role: "Admin"
    }
    ];
    private _userDetails$: BehaviorSubject<User> =
        new BehaviorSubject<User>({} as User);

    constructor(private router: Router) {
    }
    public get userDetails(): Observable<User> {
        return this._userDetails$.asObservable();
    }

    loginUser(username: string, password: string): boolean {
        let found = this.users.find(user => user.password == password && user.username == username);

        if (found) {
            localStorage.setItem('existUser', JSON.stringify(true));
            this._userDetails$.next(found);
            return true;
        } else {
            return false;
        }
    }
    logout() {
        localStorage.removeItem('existUser');
        this.router.navigate(['/home']);
    }

}