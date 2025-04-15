import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { ChatIconComponent } from '../icons/chat-icon.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { SubheadingComponent } from '../subheading/subheading.component';

@Component({
  selector: 'app-modal-comment',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    ChatIconComponent,
    TextareaComponent,
    SubheadingComponent,
  ],
  template: `
    <app-modal #modal>
      <app-subheading>Adicionar comentário</app-subheading>

      <form (ngSubmit)="onSubmit()" #commentForm="ngForm">
        <app-textarea
          [(ngModel)]="commentText"
          name="comment"
          placeholder="Digite seu comentário..."
          [required]="true"
        ></app-textarea>

        <footer class="footer">
          <button
            type="submit"
            class="btn-primary"
            [disabled]="!commentForm.form.valid"
          >
            Enviar
          </button>
        </footer>
      </form>
    </app-modal>

    <button type="button" class="action-button" (click)="openModal()">
      <app-chat-icon />
    </button>
  `,
  styleUrl: './modal-comment.component.scss',
})
export class ModalCommentComponent {
  @ViewChild('modal') modal!: ModalComponent;
  @Output() commentSubmitted = new EventEmitter<string>();

  commentText: string = '';

  openModal() {
    this.modal.open();
  }

  onSubmit() {
    if (this.commentText.trim()) {
      this.commentSubmitted.emit(this.commentText);
      this.commentText = '';
      this.modal.close();
    }
  }
}
