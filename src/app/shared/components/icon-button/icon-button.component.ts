import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button class="btn" [disabled]="disabled" type="button">
      <ng-content></ng-content>
    </button>
  `,
  styleUrl: './icon-button.component.scss',
})
export class IconButtonComponent {
  @Input() disabled = false;
}
