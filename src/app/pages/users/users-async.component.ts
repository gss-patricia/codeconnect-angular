import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../services/user.service';

@Component({
  selector: 'app-users-async',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  template: `
    <div class="users-container">
      <h2>Usuários</h2>

      <ng-container *ngIf="users$ | async as users; else loading">
        <div class="users-list">
          <div *ngFor="let user of users" class="user-card">
            <h3>{{ user.name }}</h3>
            <p>{{ user.email }}</p>
            <span [class]="user.active ? 'active' : 'inactive'">
              {{ user.active ? 'Ativo' : 'Inativo' }}
            </span>
          </div>
        </div>
      </ng-container>

      <ng-template #loading>
        <div class="loading">Carregando...</div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .users-container {
        padding: 20px;
      }
      .loading {
        text-align: center;
        padding: 20px;
      }
      .users-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px;
      }
      .user-card {
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }
      .active {
        color: green;
      }
      .inactive {
        color: red;
      }
    `,
  ],
})
export class UsersAsyncComponent {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getActiveUsers$();
  }
}
