import { Component, Input, model, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type InputPropsWithoutValue = Omit<Partial<HTMLInputElement>, 'value'>;

interface InputProps extends InputPropsWithoutValue {
  label?: string;
  error?: string | null;
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-container">
      <label *ngIf="label" class="input-label text-offwhite">{{ label }}</label>
      <input
        [type]="type"
        [placeholder]="placeholder"
        [value]="value()"
        (input)="onInput($event)"
        (blur)="onBlur()"
        [disabled]="disabled"
        [attr.required]="required || false"
        [readonly]="readonly"
        [autocomplete]="autocomplete"
        [min]="min"
        [max]="max"
        [step]="step"
        [pattern]="pattern"
        [attr.minlength]="minlength"
        [attr.maxlength]="maxlength"
        class="input-field bg-grafite"
        [class.error]="hasError()"
      />
      <span *ngIf="hasError()" class="error-message text-vermelho">{{
        errorMessage()
      }}</span>
    </div>
  `,
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements InputProps {
  @Input() label?: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() disabled = false;
  @Input() required: boolean = false;
  @Input() readonly = false;
  @Input() autocomplete?: HTMLInputElement['autocomplete'];
  @Input() min?: string;
  @Input() max?: string;
  @Input() step?: string;
  @Input() pattern?: string;
  @Input() minlength?: number;
  @Input() maxlength?: number;

  value = model('');
  errorMessage = signal('');
  hasError = signal(false);
  touched = signal(false);

  @Input() set error(value: string | null) {
    this.hasError.set(!!value);
    if (value) {
      this.errorMessage.set(value);
    }
  }

  onInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.hasError.set(false);
  }

  onBlur(): void {
    this.touched.set(true);
  }
}
