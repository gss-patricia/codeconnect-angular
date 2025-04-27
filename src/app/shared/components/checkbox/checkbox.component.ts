import {
  Component,
  Input,
  Output,
  EventEmitter,
  model,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <label class="checkbox-container">
      <input
        type="checkbox"
        [checked]="checked()"
        (change)="onChanged($event)"
        (blur)="onBlur()"
      />
      <span class="checkmark"></span>
      <span class="label-text">{{ label }}</span>
    </label>
  `,
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() id = '';
  @Input() disabled = false;
  @Input() label = '';
  checked = model(false);
  @Output() change = new EventEmitter<boolean>();
  touched = signal(false);

  onChanged(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    this.checked.set(checkbox.checked);
    this.change.emit(checkbox.checked);
  }

  onBlur(): void {
    this.touched.set(true);
  }
}
