import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AccountCircleIconComponent } from '../icons/account-circle-icon/account-circle-icon.component';
import { LogoutIconComponent } from '../icons/logout-icon/logout-icon.component';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AccountCircleIconComponent,
    LogoutIconComponent,
  ],
  template: `
    <aside class="aside">
      <div class="logo">
        <a [routerLink]="['/']">
          <img src="assets/logo.png" alt="Code Connect" />
        </a>
      </div>

      <nav class="menu">
        <a [routerLink]="['/perfil']" class="menu-item">
          <div class="menu-content">
            <app-account-circle-icon
              [color]="isActive('/perfil') ? '#fff' : '#888888'"
            />
            <span>Perfil</span>
          </div>
        </a>

        <button class="menu-item logout">
          <div class="menu-content" (click)="logout()">
            <app-logout-icon
              [color]="isActive('/logout') ? '#fff' : '#888888'"
            />
            <span>Sair</span>
          </div>
        </button>
      </nav>
    </aside>
  `,
  styleUrl: './aside.component.scss',
})
export class AsideComponent {
  isActive(path: string): boolean {
    return window.location.pathname === path;
  }

  logout() {
    // TODO: Implementar lógica de logout
    console.log('Logout clicked');
  }
}
