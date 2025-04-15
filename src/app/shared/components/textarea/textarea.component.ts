import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <textarea
      [ngModel]="value"
      (ngModelChange)="onValueChange($event)"
      [placeholder]="placeholder"
      [rows]="rows"
      [cols]="cols"
      [disabled]="disabled"
      [required]="required"
      [name]="name"
      [id]="id"
    >
    </textarea>
  `,
  styleUrl: './textarea.component.scss',
})
export class TextareaComponent {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
  @Input() cols: number = 30;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name: string = '';
  @Input() id: string = '';

  onValueChange(value: string) {
    this.value = value;
  }
}
