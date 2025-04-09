import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService, User } from '../../services/user.service';
import { Subject, Subscription, combineLatest } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap,
  map,
} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="users-container">
      <h2>Gerenciamento de Usuários</h2>

      <!-- Formulário de busca -->
      <div class="search-container">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (input)="onSearch($event)"
          placeholder="Buscar usuários..."
          class="search-input"
        />
      </div>

      <!-- Loading e Error states -->
      <div *ngIf="loading" class="loading">Carregando usuários...</div>

      <div *ngIf="error" class="error">
        {{ error }}
      </div>

      <!-- Lista de usuários -->
      <div *ngIf="!loading && !error" class="users-list">
        <div *ngFor="let user of filteredUsers" class="user-card">
          <h3>{{ user.name }}</h3>
          <p>{{ user.email }}</p>
          <span [class]="user.active ? 'active' : 'inactive'">
            {{ user.active ? 'Ativo' : 'Inativo' }}
          </span>
        </div>
      </div>

      <!-- Estatísticas -->
      <div class="stats" *ngIf="!loading && !error">
        <p>Total de usuários: {{ totalUsers }}</p>
        <p>Usuários ativos: {{ activeUsers }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .users-container {
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .search-container {
        margin: 20px 0;
      }

      .search-input {
        padding: 8px;
        width: 100%;
        max-width: 300px;
        border: 1px solid #ddd;
        border-radius: 4px;
      }

      .loading {
        text-align: center;
        padding: 20px;
        color: #666;
      }

      .error {
        color: red;
        padding: 20px;
        background-color: #fff3f3;
        border-radius: 4px;
        margin: 20px 0;
      }

      .users-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        padding: 20px 0;
      }

      .user-card {
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
        background-color: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }

      .active {
        color: green;
        font-weight: bold;
      }

      .inactive {
        color: red;
        font-weight: bold;
      }

      .stats {
        margin-top: 20px;
        padding: 15px;
        background-color: #f5f5f5;
        border-radius: 4px;
      }
    `,
  ],
})
export class UsersComponent implements OnInit, OnDestroy {
  // Estado do componente
  loading = false;
  error = '';
  searchTerm = '';
  filteredUsers: User[] = [];
  totalUsers = 0;
  activeUsers = 0;

  // Subject para busca
  private searchSubject = new Subject<string>();

  // Subscription para gerenciar todas as inscrições
  private subscription = new Subscription();

  constructor(private userService: UserService) {
    // Configurar a lógica de busca com RxJS
    this.subscription.add(
      this.searchSubject
        .pipe(
          debounceTime(300), // Espera 300ms após a última digitação
          distinctUntilChanged(), // Só emite se o valor mudou
          switchMap((term) =>
            this.userService
              .getUsers$()
              .pipe(map((users) => this.filterUsers(users, term)))
          )
        )
        .subscribe({
          next: (users) => {
            this.filteredUsers = users;
            this.loading = false;
          },
          error: (err) => {
            this.error = 'Erro ao carregar usuários';
            console.error(err);
            this.loading = false;
          },
        })
    );
  }

  ngOnInit() {
    this.loadUsers();
  }

  ngOnDestroy() {
    // Limpar todas as inscrições
    this.subscription.unsubscribe();
  }

  // Método chamado quando o usuário digita na busca
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  private loadUsers() {
    this.loading = true;
    this.error = '';

    // Carregar usuários e calcular estatísticas
    this.subscription.add(
      this.userService.getUsers$().subscribe({
        next: (users) => {
          this.filteredUsers = users;
          this.totalUsers = users.length;
          this.activeUsers = users.filter((user) => user.active).length;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'Erro ao carregar usuários';
          console.error(err);
          this.loading = false;
        },
      })
    );
  }

  private filterUsers(users: User[], term: string): User[] {
    if (!term) return users;

    const searchTerm = term.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
    );
  }
}
