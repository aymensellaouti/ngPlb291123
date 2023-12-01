import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CredentialsDto } from '../dto/credentials.dto';
import { APP_ROUTES } from 'src/app/config/routes.config';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService,
  ) {}
  login(credentials: CredentialsDto) {
    this.authService.login(credentials).subscribe({
      next: () => {
        this.router.navigate([APP_ROUTES.cv]);
      },
      error: (error) => {this.toaster.error('Veuillez vérifier vos crédentials');},
    });
  }
}
