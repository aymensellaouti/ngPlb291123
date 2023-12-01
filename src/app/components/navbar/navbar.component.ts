import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/auth.service';
import { APP_ROUTES } from 'src/app/config/routes.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
    public translateService: TranslateService
  ) {
      translateService.setDefaultLang('fr');
      translateService.addLangs(['en', 'fr']);
      const browserLang = translateService.getBrowserLang();
      translateService.use(browserLang?.match(/en|fr/) ? browserLang : 'fr');
  }
  logout() {
    this.authService.logout();
    this.router.navigate([APP_ROUTES.login]);
  }

  translate(langue: string) {
    this.translateService.use(langue);
  }
}
