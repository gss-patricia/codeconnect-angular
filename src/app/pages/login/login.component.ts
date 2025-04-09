import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CheckboxComponent } from '../../shared/components/checkbox/checkbox.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, CheckboxComponent],
  template: `
    <div class="login-container bg-grafite flex">
      <div class="login-card">
        <div class="login-image">
          <!-- Imagem será substituída pelo link correto -->
          <img
            src="URL_DA_IMAGEM_LOGIN"
            alt="Code Connect"
            class="main-image"
          />
          <div class="logo">
            <!-- Logo será substituído pelo link correto -->
            <img src="URL_DO_LOGO" alt="Code Connect Logo" class="logo-image" />
          </div>
        </div>

        <div class="login-form">
          <h1 class="heading text-branco">Login</h1>
          <p class="subtitle text-cinza-claro">Boas-vindas! Faça seu login.</p>

          <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
            <div class="form-group">
              <label class="label text-cinza-claro">Email ou usuário</label>
              <input
                type="text"
                [(ngModel)]="loginData.username"
                name="username"
                placeholder="usuario123"
                class="bg-grafite"
                required
              />
            </div>

            <div class="form-group">
              <label class="label text-cinza-claro">Senha</label>
              <input
                type="password"
                [(ngModel)]="loginData.password"
                name="password"
                placeholder="******"
                class="bg-grafite"
                required
              />
            </div>

            <div class="form-options">
              <app-checkbox
                [(ngModel)]="loginData.rememberMe"
                name="rememberMe"
              >
                Lembrar-me
              </app-checkbox>
              <a
                routerLink="/forgot-password"
                class="paragraph-small text-cinza-claro"
              >
                Esqueci a senha
              </a>
            </div>

            <button type="submit" class="btn-primary">
              Login
              <i class="fas fa-arrow-right"></i>
            </button>
          </form>

          <div class="social-login">
            <div class="divider">
              <span class="paragraph-small text-cinza-medio"
                >ou entre com outras contas</span
              >
            </div>

            <div class="social-buttons">
              <button class="social-button" (click)="loginWithGithub()">
                <img src="assets/icons/github.svg" alt="GitHub" />
                <span>GitHub</span>
              </button>
              <button class="social-button" (click)="loginWithGoogle()">
                <img src="assets/icons/google.svg" alt="Gmail" />
                <span>Gmail</span>
              </button>
            </div>
          </div>

          <p class="signup-link paragraph-small text-cinza-claro">
            Ainda não tem conta?
            <a routerLink="/signup" class="text-verde-destaque"
              >Crie seu cadastro!</a
            >
          </p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData = {
    username: '',
    password: '',
    rememberMe: false,
  };

  onSubmit() {
    if (this.loginData.username && this.loginData.password) {
      console.log('Login submitted:', this.loginData);
      // Aqui você implementará a lógica de login
    }
  }

  loginWithGithub() {
    console.log('Login with GitHub');
    // Implementar login com GitHub
  }

  loginWithGoogle() {
    console.log('Login with Google');
    // Implementar login com Google
  }
}
