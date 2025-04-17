import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul class="avatar">
      <li>
        <img [src]="imageSrc" [alt]="name" width="32" height="32" />
      </li>
      <li>{{ '@' + name }}</li>
    </ul>
  `,
  styleUrl: './avatar.component.scss',
})
export class AvatarComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) imageSrc!: string;
}
