import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-login',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="social-login">
      <div class="divider">
        <div class="line"></div>
        <span class="disclaimer text-cinza-medio"
          >ou entre com outras contas</span
        >
        <div class="line"></div>
      </div>

      <div class="social-buttons">
        <button class="social-button" (click)="onGithubLogin()">
          <img src="assets/Github.svg" alt="GitHub" />
          <span>GitHub</span>
        </button>
        <button class="social-button" (click)="onGoogleLogin()">
          <img src="assets/Google.svg" alt="Gmail" />
          <span>Gmail</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./social-login.component.scss'],
})
export class SocialLoginComponent {
  @Output() githubLogin = new EventEmitter<void>();
  @Output() googleLogin = new EventEmitter<void>();

  onGithubLogin(): void {
    this.githubLogin.emit();
  }

  onGoogleLogin(): void {
    this.googleLogin.emit();
  }
}
