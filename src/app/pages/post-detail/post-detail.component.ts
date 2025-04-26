import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CardPostComponent } from '../../shared/components/card-post/card-post.component';
import { CommentListComponent } from '../../shared/components/comment-list/comment-list.component';
import { MOCK_POSTS } from '../../shared/mocks/posts.mock';
import { Post } from '../../shared/models/post.model';
import { AsideComponent } from '../../shared/components/aside/aside.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [
    CommonModule,
    CardPostComponent,
    CommentListComponent,
    AsideComponent,
  ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent implements OnInit {
  post = signal<Post | null>(null);

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.getPostBySlug(slug);
    });
  }

  private getPostBySlug(slug: string) {
    const foundPost = MOCK_POSTS.find((post) => post.slug === slug) || null;
    this.post.set(foundPost);

    if (!foundPost) {
      this.router.navigate(['/not-found']);
    }
  }
}
