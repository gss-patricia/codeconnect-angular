import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { ThumbsUpIconComponent } from '../icons/thumbs-up-icon.component';

@Component({
  selector: 'app-thumbs-up-button',
  standalone: true,
  imports: [
    CommonModule,
    IconButtonComponent,
    SpinnerComponent,
    ThumbsUpIconComponent,
  ],
  template: `
    <app-icon-button [disabled]="loading">
      @if (loading) {
      <app-spinner />
      } @else {
      <app-thumbs-up-icon />
      }
    </app-icon-button>
  `,
})
export class ThumbsUpButtonComponent {
  loading = false;
}
