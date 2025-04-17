import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <aside class="aside">
      <a [routerLink]="['/']">
        <img src="assets/logo.png" alt="Code Connect" />
      </a>
    </aside>
  `,
  styleUrl: './aside.component.scss',
})
export class AsideComponent {}
