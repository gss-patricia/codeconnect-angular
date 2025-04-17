import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal-reply',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ModalComponent,
    TextareaComponent,
    ButtonComponent,
  ],
  template: `
    <app-modal #modal>
      <h2 class="title">Responder comentário</h2>
      <form (ngSubmit)="onSubmit()">
        <app-textarea
          [(ngModel)]="replyText"
          name="reply"
          placeholder="Digite sua resposta..."
        ></app-textarea>
        <div class="footer">
          <app-button type="submit" [disabled]="!replyText.trim()">
            Responder
          </app-button>
        </div>
      </form>
    </app-modal>
  `,
  styles: [
    `
      .footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 24px;
      }

      :host {
        display: contents;
      }
    `,
  ],
})
export class ModalReplyComponent {
  @ViewChild('modal') modal!: ModalComponent;
  @Input() comment: any;
  replyText = '';

  onSubmit() {
    if (this.replyText.trim()) {
      // TODO: Implementar lógica de envio da resposta
      console.log('Resposta:', this.replyText);
      this.replyText = '';
      this.modal.close();
    }
  }
}
