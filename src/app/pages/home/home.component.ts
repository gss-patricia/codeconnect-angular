import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardPostComponent } from '../../shared/components/card-post/card-post.component';
import { SearchFormComponent } from '../../shared/components/search-form/search-form.component';
import { AsideComponent } from '../../shared/components/aside/aside.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { MOCK_POSTS } from '../../shared/mocks/posts.mock';
import { Post } from '../../shared/models/post.model';
import { processPostsContent } from '../../shared/helpers/text.helper';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CardPostComponent,
    SearchFormComponent,
    AsideComponent,
    ButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  allPosts: Post[] = processPostsContent(MOCK_POSTS);
  posts: Post[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalPages: number = Math.ceil(MOCK_POSTS.length / this.itemsPerPage);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Inscreve-se nas mudanças dos parâmetros da rota
    this.route.queryParams.subscribe((params) => {
      this.currentPage = Number(params['page']) || 1;
      this.loadPosts();
    });
  }

  private loadPosts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.posts = this.allPosts.slice(startIndex, endIndex);
  }

  get hasNextPage(): boolean {
    return this.currentPage < this.totalPages;
  }

  get hasPreviousPage(): boolean {
    return this.currentPage > 1;
  }

  handleLike(postId: string) {
    console.log('Like clicked:', postId);
    this.allPosts = this.allPosts.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    this.loadPosts(); // Recarrega os posts da página atual
  }

  handleComment(postId: string) {
    console.log('Comment clicked:', postId);
  }

  goToPage(page: number) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }
}
