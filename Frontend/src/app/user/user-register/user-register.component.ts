import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent {
  registrationForm!: FormGroup;
  user: any;
  userSubmitted!: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {}

  ngOnInit() {
    this.createRegustrationForm();
  }

  // Making validations for forms field
  createRegustrationForm() {
    this.registrationForm = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  // Adding a custom validator
  passwordMatchingValidator(fg: AbstractControl): ValidationErrors | null {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  // Using get methods for form controls
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }

  get password() {
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }

  onSubmit() {
    this.userSubmitted = true;
    if (this.registrationForm.valid) {
      this.user = this.registrationForm.value;
      this.userService.addUser(this.user);
      this.registrationForm.reset();
      this.userSubmitted = false;
      //alertify.success('Congrats');
    } else {
      //alertify.error('Not today');
    }
  }
}
