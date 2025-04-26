import {
  Component,
  Input,
  ViewChild,
  Output,
  EventEmitter,
  signal,
  computed,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from '../modal/modal.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { ButtonComponent } from '../button/button.component';
import { CommentComponent } from '../comment/comment.component';
import { Comment } from '../../models/post.model';

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
  templateUrl: './reply-modal.component.html',
  styleUrls: ['./reply-modal.component.scss'],
})
export class ReplyModalComponent {
  @ViewChild('modal') modal!: ModalComponent;
  @Input() comment!: Comment;
  @Input() post!: any;
  @Output() replySubmitted = new EventEmitter<string>();

  replyText = signal('');
  isSubmitDisabled = computed(() => !this.replyText().trim());

  openModal() {
    this.modal.open();
  }

  onSubmit() {
    if (!this.isSubmitDisabled()) {
      // TODO: Implementar lógica de envio da resposta quando a API estiver pronta
      console.log('Resposta enviada:', this.replyText());
      this.replyText.set('');
      this.modal.close();
    }
  }
}
