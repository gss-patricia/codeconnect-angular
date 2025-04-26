import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
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
  posts = signal<Post[]>(processPostsContent(MOCK_POSTS));
  currentPage = signal(1);
  itemsPerPage = signal(4);

  paginatedPosts = computed(() => {
    const startIndex = (this.currentPage() - 1) * this.itemsPerPage();
    const endIndex = startIndex + this.itemsPerPage();
    return this.posts().slice(startIndex, endIndex);
  });

  totalPages = computed(() =>
    Math.ceil(this.posts().length / this.itemsPerPage())
  );

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const page = Number(params['page']) || 1;
      this.currentPage.set(page);
    });
  }

  goToPage(page: number) {
    this.currentPage.set(page);
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
  }

  handleLike(postId: string) {
    this.posts.update((posts) =>
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }

  handleComment(postId: string) {
    console.log('Comment clicked:', postId);
  }
}
