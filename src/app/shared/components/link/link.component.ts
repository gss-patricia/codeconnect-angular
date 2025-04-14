import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a
      [routerLink]="to"
      [class]="customClass"
      class="custom-link"
      [class.text-cinza-claro]="variant === 'light'"
      [class.text-cinza-medio]="variant === 'medium'"
      [class.text-verde-destaque]="variant === 'highlight'"
    >
      <ng-content></ng-content>
    </a>
  `,
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() to: string = '';
  @Input() variant: 'light' | 'medium' | 'highlight' = 'light';
  @Input() customClass: string = '';
}
