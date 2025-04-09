import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true,
    },
  ],
  template: `
    <label class="checkbox">
      <input
        type="checkbox"
        [id]="id"
        [(ngModel)]="checked"
        (ngModelChange)="onChanged($event)"
        (blur)="onTouched()"
        [disabled]="disabled"
      />
      <span class="checkmark"></span>
      <span class="label text-cinza-claro">
        <ng-content></ng-content>
      </span>
    </label>
  `,
  styles: [
    `
      .checkbox {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        user-select: none;
      }

      input[type='checkbox'] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkmark {
        position: relative;
        width: 1.25rem;
        height: 1.25rem;
        background-color: var(--grafite);
        border: 1px solid var(--cinza);
        border-radius: 0.5rem;
        transition: all 0.2s ease;
      }

      input[type='checkbox']:checked ~ .checkmark {
        background-color: var(--verde-destaque);
        border-color: var(--verde-destaque);
      }

      .checkmark:after {
        content: '';
        position: absolute;
        display: none;
        left: 6px;
        top: 2px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      input[type='checkbox']:checked ~ .checkmark:after {
        display: block;
      }

      .label {
        color: var(--cinza-claro);
        font-size: 0.875rem;
      }
    `,
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() id = '';
  @Input() disabled = false;

  checked = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  onChanged(value: boolean) {
    this.onChange(value);
  }

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
