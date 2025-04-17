import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { ReplyModalComponent } from '../reply-modal/reply-modal.component';
import { Comment } from '../../models/post.model';

@Component({
  selector: 'app-replies',
  standalone: true,
  imports: [CommonModule, CommentComponent, ReplyModalComponent],
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.scss'],
})
export class RepliesComponent {
  @Input() comment!: Comment;
  @Input() replies: Comment[] = [];
  showReplies = false;

  toggleReplies() {
    this.showReplies = !this.showReplies;
  }

  fetchReplies() {
    // Simula o carregamento das respostas
    const mockReplies: Comment[] = [
      {
        id: 'reply-1',
        authorId: 'author-2',
        postId: 'post-1',
        parentId: 'comment-1',
        author: {
          id: 'author-2',
          username: 'maria.silva',
          name: 'Maria Silva',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=maria.silva',
        },
        text: 'Excelente artigo! Muito bem explicado.',
        children: [],
        updatedAt: new Date(),
      },
      {
        id: 'reply-2',
        authorId: 'author-3',
        postId: 'post-1',
        parentId: 'comment-1',
        author: {
          id: 'author-3',
          username: 'joao.santos',
          name: 'João Santos',
          avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=joao.santos',
        },
        text: 'Concordo totalmente! As explicações estão muito claras.',
        children: [],
        updatedAt: new Date(),
      },
    ];

    this.replies = mockReplies;
  }
}
