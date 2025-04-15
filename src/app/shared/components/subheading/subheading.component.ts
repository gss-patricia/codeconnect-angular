import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subheading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>
      <ng-content></ng-content>
    </h2>
  `,
  styleUrl: './subheading.component.scss',
})
export class SubheadingComponent {}
