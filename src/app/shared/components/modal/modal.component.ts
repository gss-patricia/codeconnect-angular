import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <dialog #dialogRef class="dialog">
      <header class="header">
        <button type="button" (click)="close()">X</button>
      </header>
      <ng-content></ng-content>
    </dialog>
  `,
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @ViewChild('dialogRef') dialogRef!: ElementRef<HTMLDialogElement>;

  open() {
    this.dialogRef.nativeElement.showModal();
  }

  close() {
    this.dialogRef.nativeElement.close();
  }
}
