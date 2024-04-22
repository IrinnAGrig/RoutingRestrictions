import { Component } from '@angular/core';
import { User } from './login/user.model';
import { LoginService } from './login/login.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user?: User;
  constructor(private loginService: LoginService) {
    this.loginService.userDetails.pipe(
      map(userDetails => {
        if (userDetails) {
          this.user = userDetails;
        }
      })
    ).subscribe();
  }
  isAuthenticated(): boolean {
    let data = localStorage.getItem('existUser');
    let isLoged;
    if (data)
      isLoged = JSON.parse(data);
    return isLoged;
  }
  logout() {
    //localStorage.removeItem('existUser');
    // this.loginService.logout();
  }
}
