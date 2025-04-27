import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputComponent } from '../../shared/components/input/input.component';
import { LinkComponent } from '../../shared/components/link/link.component';
import { SocialLoginComponent } from '../../shared/components/social-login/social-login.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputComponent,
    LinkComponent,
    SocialLoginComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  onSubmit() {
    // TODO: Implement register logic
    console.log('Register submitted', {
      name: this.name,
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
