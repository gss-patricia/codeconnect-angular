import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { SocialLoginComponent } from '../../shared/components/social-login/social-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CheckboxComponent,
    InputComponent,
    LinkComponent,
    SocialLoginComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    // TODO: Implement login logic
    console.log('Login submitted', {
      email: this.email,
      password: this.password,
      rememberMe: this.rememberMe,
    });
  }

  loginWithGithub() {
    // TODO: Implement GitHub login
    console.log('GitHub login clicked');
  }

  loginWithGoogle() {
    // TODO: Implement Google login
    console.log('Google login clicked');
  }
}
