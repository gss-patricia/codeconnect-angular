import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsideComponent } from '../../shared/components/aside/aside.component';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { CardPostComponent } from '../../shared/components/card-post/card-post.component';
import { Post } from '../../shared/models/post.model';
import { MOCK_POSTS } from '../../shared/mocks/posts.mock';

interface User {
  name: string;
  email: string;
  address: string;
  avatarUrl: string;
  description?: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AsideComponent,
    ButtonComponent,
    InputComponent,
    TextareaComponent,
    CardPostComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isEditing = signal(false);

  // Dados mockados do usuário
  user = signal<User>({
    name: 'Patrícia Silva',
    email: 'patricia.silva@example.com',
    address: 'Rua das Flores, 123 - São Paulo, SP',
    avatarUrl: 'https://i.pravatar.cc/300',
    description: '',
  });

  // Posts mockados do usuário (usando os primeiros 4 posts do mock)
  userPosts = signal<Post[]>(MOCK_POSTS.slice(0, 4));

  // Valores temporários para edição
  tempUser = signal<User>({ ...this.user() });

  toggleEdit() {
    this.isEditing.set(!this.isEditing());
    if (this.isEditing()) {
      this.tempUser.set({ ...this.user() });
    }
  }

  saveChanges() {
    this.user.set({ ...this.tempUser() });
    this.isEditing.set(false);
  }

  cancelEdit() {
    this.tempUser.set({ ...this.user() });
    this.isEditing.set(false);
  }

  updateTempUser(field: keyof User, value: string) {
    this.tempUser.update((user) => ({
      ...user,
      [field]: value,
    }));
  }

  handleLike(postId: string) {
    // Implementação futura
    console.log('Like post:', postId);
  }

  handleComment(postId: string) {
    // Implementação futura
    console.log('Comment post:', postId);
  }
}
