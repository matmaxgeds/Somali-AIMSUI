import { Component } from '@angular/core';
import { SecurityHelperService } from '../services/security-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aims-ui';
  isLoggedIn: boolean = false;

  constructor(private securityService: SecurityHelperService, private router: Router) {
    this.isLoggedIn = (localStorage.getItem('isLoggedIn') == 'true');
  }

  logout(e) {
    this.securityService.clearLoginSession();
    this.router.navigateByUrl('/home');
    location.reload();
  }
}
