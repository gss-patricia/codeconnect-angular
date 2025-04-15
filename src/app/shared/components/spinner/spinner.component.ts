import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="loader"></span>`,
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {}
