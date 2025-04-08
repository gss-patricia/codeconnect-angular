import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div class="home-container">
      <h1>Bem-vindo ao CodeConnect</h1>
      <div class="button-group">
        <app-button variant="primary">Botão Primário</app-button>
        <app-button variant="secondary">Botão Secundário</app-button>
      </div>
    </div>
  `,
  styles: [
    `
      .home-container {
        padding: 20px;
        text-align: center;
      }
      .button-group {
        display: flex;
        gap: 10px;
        justify-content: center;
        margin-top: 20px;
      }
    `,
  ],
})
export class HomeComponent {}
