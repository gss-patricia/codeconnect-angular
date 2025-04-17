import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent],
  template: `
    <form class="form" (ngSubmit)="onSubmit()">
      <input
        name="q"
        [(ngModel)]="searchTerm"
        class="input"
        placeholder="Digite o que você procura"
      />
      <app-button type="submit"> Buscar </app-button>
    </form>
  `,
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/'], {
        queryParams: { q: this.searchTerm },
      });
    }
  }
}
