import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPostComponent } from '../../shared/components/card-post/card-post.component';
import { MOCK_POSTS } from '../../shared/mocks/posts.mock';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardPostComponent],
  template: `
    <main class="home-container">
      <section class="posts-list">
        @for (post of posts; track post.id) {
        <app-card-post
          [post]="post"
          [highlight]="true"
          (onLike)="handleLike($event)"
          (onComment)="handleComment($event)"
        />
        }
      </section>
    </main>
  `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  posts: Post[] = MOCK_POSTS;

  handleLike(postId: string) {
    console.log('Like clicked:', postId);
    // Aqui você implementaria a lógica real de like
    this.posts = this.posts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
  }

  handleComment(postId: string) {
    console.log('Comment clicked:', postId);
    // Aqui você implementaria a lógica real de comentário
  }
}
