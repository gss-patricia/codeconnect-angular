import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AvatarComponent } from '../avatar/avatar.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { ThumbsUpButtonComponent } from './thumbs-up-button.component';
import { ModalCommentComponent } from '../modal-comment/modal-comment.component';
import { Post } from '../../models/post.model';
import { ThumbsUpIconComponent } from '../icons/thumbs-up-icon.component';
import { ChatIconComponent } from '../icons/chat-icon.component';

interface Author {
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-card-post',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    AvatarComponent,
    IconButtonComponent,
    ThumbsUpButtonComponent,
    ModalCommentComponent,
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
        <p>{{ post.body }}</p>
        <a [routerLink]="['/posts', post.slug]">Ver detalhes</a>
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

  handleLike() {
    this.onLike.emit(this.post.body);
  }

  handleComment() {
    this.onComment.emit(this.post.body);
  }
}
