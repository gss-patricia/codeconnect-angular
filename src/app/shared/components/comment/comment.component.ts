import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { Comment } from '../../models/post.model';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule, AvatarComponent],
  template: `
    <div class="comment">
      <div class="comment-content">
        <div class="comment-header">
          <app-avatar
            [imageSrc]="comment.author.avatar"
            [name]="comment.author.name"
          ></app-avatar>
          <div class="comment-info">
            <span class="text">{{ comment.text }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .comment {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .comment-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .comment-header {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .comment-header li {
        color: var(--grafite);
      }

      .comment-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
      }

      .text {
        color: var(--grafite);
        font-size: 14px;
        line-height: 1.5;
      }
    `,
  ],
})
export class CommentComponent {
  @Input() comment!: Comment;
}
