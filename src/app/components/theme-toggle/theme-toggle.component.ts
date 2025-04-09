import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="toggleTheme()" class="theme-toggle">
      <span *ngIf="currentTheme === 'light'">🌙</span>
      <span *ngIf="currentTheme === 'dark'">☀️</span>
      <span *ngIf="currentTheme === 'high-contrast'">🎨</span>
    </button>
  `,
  styles: [
    `
      .theme-toggle {
        @include button-base;
        background: transparent;
        border: 1px solid var(--border-color);
        padding: $spacing-xs;
        border-radius: 50%;
        cursor: pointer;
        transition: all $transition-fast;

        &:hover {
          background-color: var(--background-light);
        }
      }
    `,
  ],
})
export class ThemeToggleComponent {
  currentTheme: Theme = 'light';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe((theme) => {
      this.currentTheme = theme;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
