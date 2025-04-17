import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from '../comment/comment.component';
import { ReplyModalComponent } from '../reply-modal/reply-modal.component';
import { Comment } from '../../models/post.model';

@Component({
  selector: 'app-replies',
  standalone: true,
  imports: [CommonModule, CommentComponent, ReplyModalComponent],
  template: `
    <div class="container">
      <div class="replies">
        <button
          class="btn"
          (click)="toggleReplies()"
          (mouseover)="prefetchReplies()"
        >
          {{ showReplies ? 'Ocultar' : 'Ver' }} respostas
        </button>
        @if (showReplies && replies.length) {
        <ul>
          @for (reply of replies; track reply.id) {
          <li class="reply-item">
            <app-comment [comment]="reply"></app-comment>
            <app-reply-modal [comment]="reply"></app-reply-modal>
          </li>
          }
        </ul>
        }
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        margin-top: 16px;
      }

      .replies {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .btn {
        position: relative;
        border: none;
        background-color: transparent;
        cursor: pointer;
        padding-left: 38px;
        font-size: 12.5px;
        font-style: normal;
        font-weight: 400;
        color: var(--grafite);
        text-align: left;
        width: fit-content;
      }

      .btn::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 32px;
        height: 1px;
        background-color: var(--grafite);
        display: block;
      }

      .replies ul {
        padding-left: 40px;
        margin: 0;
        list-style: none;
        color: var(--grafite);
      }

      .replies li {
        margin-bottom: 16px;
      }

      .replies li:last-child {
        margin-bottom: 0;
      }
    `,
  ],
})
export class RepliesComponent implements OnInit {
  @Input() comment!: Comment;
  @Input() slug!: string;

  showReplies = false;
  replies: Comment[] = [];

  ngOnInit() {
    // Inicialização do componente
  }

  toggleReplies() {
    this.showReplies = !this.showReplies;
    if (this.showReplies) {
      this.fetchReplies();
    }
  }

  prefetchReplies() {
    if (!this.showReplies) {
      // Aqui implementaremos o prefetch quando tivermos a API
      // Similar ao React Query prefetch
    }
  }

  fetchReplies() {
    // Aqui implementaremos a chamada real à API
    // Por enquanto, usando o mock para demonstração
    setTimeout(() => {
      this.replies = [
        {
          id: `${this.comment.id}-reply-1`,
          authorId: '2',
          parentId: this.comment.id,
          postId: this.slug,
          text: 'Esta é uma resposta simulada ao comentário principal.',
          author: {
            id: '2',
            username: 'anabeatriz',
            name: 'Ana Beatriz',
            avatar:
              'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
          },
          children: [],
          updatedAt: new Date('2024-03-18T09:30:00Z'),
        },
        {
          id: `${this.comment.id}-reply-2`,
          authorId: '3',
          parentId: this.comment.id,
          postId: this.slug,
          text: 'Outra resposta simulada para demonstrar o funcionamento.',
          author: {
            id: '3',
            username: 'brunas',
            name: 'Bruna S',
            avatar:
              'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
          },
          children: [],
          updatedAt: new Date('2024-03-18T10:15:00Z'),
        },
      ];
    }, 500); // Simulando um pequeno atraso de rede
  }
}
