import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';
import { Post } from '../../models/post.model';
import { ThumbsUpIconComponent } from '../icons/thumbs-up-icon.component';
import { ChatIconComponent } from '../icons/chat-icon.component';

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AvatarComponent,
    ThumbsUpIconComponent,
    ChatIconComponent,
  ],
  template: `
    <article class="card" [style.width.px]="highlight ? 993 : 486">
      <header class="header">
        <figure [style.height.px]="highlight ? 300 : 133">
          <img
            [src]="post.cover"
            [alt]="'Capa do post de titulo: ' + post.title"
            class="cover-image"
          />
        </figure>
      </header>
      <section class="body">
        <h2>{{ post.title }}</h2>
        <p>{{ highlight ? post.body : truncateBody(post.body) }}</p>
        @if (!highlight) {
        <a [routerLink]="['/posts', post.slug]">Ver detalhes</a>
        }
      </section>
      <footer class="footer">
        <div class="actions">
          <div class="action-group">
            <button class="action-button" (click)="handleLike()">
              <app-thumbs-up-icon />
              <span>{{ post.likes }}</span>
            </button>
          </div>
          <div class="action-group">
            <button class="action-button" (click)="handleComment()">
              <app-chat-icon />
              <span>{{ post.comments.length }}</span>
            </button>
          </div>
        </div>
        <app-avatar
          [imageSrc]="post.author.avatar"
          [name]="post.author.username"
        ></app-avatar>
      </footer>
    </article>
  `,
  styleUrl: './card-post.component.scss',
})
export class CardPostComponent {
  @Input() post!: Post;
  @Input() highlight = false;

  @Output() onLike = new EventEmitter<string>();
  @Output() onComment = new EventEmitter<string>();

  truncateBody(text: string): string {
    // Divide o texto em linhas
    const lines = text.split('\n');

    // Se tiver 3 ou menos linhas, retorna o texto original
    if (lines.length <= 3) {
      return text;
    }

    // Pega apenas as 3 primeiras linhas e adiciona reticências
    return lines.slice(0, 3).join('\n') + '...';
  }

  handleLike() {
    this.onLike.emit(this.post.body);
  }

  handleComment() {
    this.onComment.emit(this.post.body);
  }
}
