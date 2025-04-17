import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ButtonComponent } from '../button/button.component';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-reply-modal',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    TextareaComponent,
    ButtonComponent,
    CommentComponent,
  ],
  template: `
    <app-modal #modal>
      <form (ngSubmit)="onSubmit()">
        <div class="body">
          <app-comment [comment]="comment"></app-comment>
        </div>
        <div class="divider"></div>
        <app-textarea
          [(ngModel)]="replyText"
          name="reply"
          placeholder="Escreva sua resposta..."
          [rows]="8"
          [required]="true"
        ></app-textarea>
        <div class="footer">
          <app-button type="submit" [disabled]="!replyText.trim()">
            Responder
          </app-button>
        </div>
      </form>
    </app-modal>
    <button class="btn" (click)="openModal()">Responder</button>
  `,
  styles: [
    `
      :host {
        display: contents;
      }

      .btn {
        color: var(--grafite);
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        background-color: transparent;
        border: none;
        cursor: pointer;
        margin: 8px 0;
      }

      .divider {
        margin: 16px 0;
        height: 88px;
        border-left: 1px solid var(--cinza-medio);
      }

      .footer {
        display: flex;
        justify-content: flex-end;
      }

      .body strong {
        color: var(--verde-destaque);
      }

      .body p {
        color: var(--cinza-claro);
      }
    `,
  ],
})
export class ReplyModalComponent {
  @ViewChild('modal') modal!: ModalComponent;
  @Input() comment: any;
  @Input() post: any;
  @Output() replySubmitted = new EventEmitter<string>();
  replyText = '';

  openModal() {
    this.modal.open();
  }

  onSubmit() {
    if (this.replyText.trim()) {
      // TODO: Implementar lógica de envio da resposta quando a API estiver pronta
      console.log('Resposta enviada:', this.replyText);
      this.replyText = '';
      this.modal.close();
    }
  }
}
