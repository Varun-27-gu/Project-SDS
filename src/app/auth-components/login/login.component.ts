import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';
import { StorageService } from 'src/app/auth-services/storage-service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  isSpinning: boolean = false;
  passwordVisible: boolean = false;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  togglePassword(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  submitForm(): void {
    if (this.loginForm.invalid) return;

    this.isSpinning = true;
    this.service.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.isSpinning = false;
        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole
          };
          StorageService.saveToken(res.jwt);
          StorageService.saveUser(user);

          if (StorageService.isAdminLoggedIn()) {
            this.router.navigateByUrl('admin/dashboard');
          } else if (StorageService.isCustomerLoggedIn()) {
            this.router.navigateByUrl('customer/dashboard');
          }
        } else {
          console.log('Wrong credentials');
        }
      },
      error: () => {
        this.isSpinning = false;
        console.log('Login failed');
      }
    });
  }
}
