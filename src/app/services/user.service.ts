import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface User {
  id: number;
  name: string;
  email: string;
  active: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'João', email: 'joao@email.com', active: true },
    { id: 2, name: 'Maria', email: 'maria@email.com', active: true },
    { id: 3, name: 'Pedro', email: 'pedro@email.com', active: false },
  ];

  // Retorna todos os usuários
  getUsers$(): Observable<User[]> {
    // Simulando uma chamada API com delay
    return of(this.users).pipe(
      delay(1000) // Simula delay de rede
    );
  }

  // Retorna apenas usuários ativos
  getActiveUsers$(): Observable<User[]> {
    return this.getUsers$().pipe(
      map((users) => users.filter((user) => user.active))
    );
  }

  // Busca usuário por ID
  getUserById$(id: number): Observable<User | undefined> {
    return this.getUsers$().pipe(
      map((users) => users.find((user) => user.id === id))
    );
  }

  // Adiciona novo usuário
  addUser$(user: Omit<User, 'id'>): Observable<User> {
    const newUser = {
      ...user,
      id: this.users.length + 1,
    };
    this.users.push(newUser);
    return of(newUser).pipe(delay(500));
  }
}
