import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../components/button/button.component';
import { CardPostComponent } from '../../shared/components/card-post/card-post.component';
import { MOCK_POSTS } from '../../shared/mocks/posts.mock';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent, CardPostComponent],
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
  searchTerm: string = '';
  selectedTags: string[] = ['Front-end', 'React', 'Acessibilidade'];
  posts: Post[] = MOCK_POSTS;

  onSearch(term: string): void {
    // Implementar lógica de busca
    console.log('Searching for:', term);
  }

  removeTag(tag: string): void {
    this.selectedTags = this.selectedTags.filter((t) => t !== tag);
  }

  clearAllTags(): void {
    this.selectedTags = [];
  }

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
