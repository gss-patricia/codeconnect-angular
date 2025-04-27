import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { RepliesComponent } from '../replies/replies.component';
import { ReplyModalComponent } from '../reply-modal/reply-modal.component';
import { Comment } from '../../models/post.model';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [
    CommonModule,
    CommentComponent,
    RepliesComponent,
    ReplyModalComponent,
  ],
  template: `
    <section class="comments">
      <h2>Comentários</h2>
      <div class="comment-list">
        @for (comment of comments; track comment.id) {
        <div class="comment-item">
          <app-comment [comment]="comment"></app-comment>
          <app-reply-modal [comment]="comment" [post]="post"></app-reply-modal>
          <app-replies [comment]="comment"></app-replies>
        </div>
        }
      </div>
    </section>
  `,
  styles: [
    `
      .comments {
        background-color: var(--cinza-medio);
        padding: 32px 16px;
        margin-top: 10px;
      }

      .comment-list {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 0;
        margin: 0;
      }

      .comment-item {
        padding: 16px 0;
        border-bottom: 1px solid var(--grafite);
      }

      .comment-item:last-child {
        border-bottom: none;
      }

      h2 {
        color: var(--grafite);
        font-size: 22px;
        font-style: normal;
        font-weight: 600;
        margin: 0 0 24px 0;
      }
    `,
  ],
})
export class CommentListComponent {
  @Input() comments: Comment[] = [];
  @Input() post: any;
}
