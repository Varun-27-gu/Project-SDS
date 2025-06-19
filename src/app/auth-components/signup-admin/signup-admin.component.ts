import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth-service/auth.service';

@Component({
  selector: 'app-signup-admin',
  templateUrl: './signup-admin.component.html',
  styleUrls: ['./signup-admin.component.scss']
})
export class SignupAdminComponent {

   isSpinning: boolean = false;
  validateForm!: FormGroup;
  notification: any;

  constructor(private service: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
       phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      checkPassword: ['', [Validators.required]],
      name: ['', [Validators.required]]
    }, { validators: this.confirmationValidator });
  }

  confirmationValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirm = control.get('checkPassword')?.value;
    return password === confirm ? null : { confirm: true };
  }

  register(): void {
  if (this.validateForm.valid) {
    const { checkPassword, ...signupData } = this.validateForm.value;  // exclude checkPassword
    console.log(signupData);
    this.service.signupAdmin(signupData).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err)
    });
  } else {
    Object.values(this.validateForm.controls).forEach(control => {
      control.markAsDirty();
      control.updateValueAndValidity();
    });
  }
 }

  private handleSignupError(error: any): void {
    let errorMessage = 'Signup failed. Please try again.';

    if (error.error?.message) {
      errorMessage = error.error.message;
    } else if (error.status === 400) {
      errorMessage = 'Invalid input. Please check your details.';
    } else if (error.status === 409) {
      errorMessage = 'Email already in use. Try another email.';
    } else if (error.status === 403) {
      errorMessage = 'Access denied. You may not have permission.';
    } else if (error.status === 500) {
      errorMessage = 'Server error. Please contact support.';
    }

    this.notification.error('ERROR', errorMessage, { nzDuration: 5000 });
  }

}
