import { Post, Comment } from '../models/post.model';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'TypeScript e suas vantagens no desenvolvimento web',
    body: 'TypeScript é incrível para desenvolvimento web! Com tipos estáticos, autocomplete e detecção de erros em tempo de compilação, a produtividade aumenta muito. #typescript #webdev',
    slug: 'typescript-e-suas-vantagens',
    cover: 'https://picsum.photos/seed/typescript/993/300',
    likes: 42,
    comments: [
      {
        id: '1',
        content:
          'Excelente post! TypeScript realmente mudou a forma como desenvolvo.',
        author: {
          username: 'João Developer',
          avatar: 'https://github.com/joaodev.png',
        },
        createdAt: new Date('2024-03-20T10:30:00Z'),
      },
    ],
    author: {
      username: 'Patricia Silva',
      avatar: 'https://github.com/patricia.png',
    },
  },
  {
    id: '2',
    title: 'Novidades do Angular 19',
    body: 'Angular 19 trouxe muitas novidades interessantes! Os novos recursos de controle de fluxo no template e o novo sistema de SSR são game-changers. #angular #frontend',
    slug: 'novidades-angular-17',
    cover: 'https://picsum.photos/seed/angular/993/300',
    likes: 38,
    comments: [
      {
        id: '2',
        content: 'Os novos recursos de controle de fluxo são fantásticos!',
        author: {
          username: 'Maria Tech',
          avatar: 'https://github.com/mariatech.png',
        },
        createdAt: new Date('2024-03-19T15:45:00Z'),
      },
    ],
    author: {
      username: 'João Developer',
      avatar: 'https://github.com/joaodev.png',
    },
  },
  {
    id: '3',
    title: 'Dicas de Performance no Angular',
    body: 'Dica de performance: Sempre use trackBy com *ngFor no Angular para melhorar a performance de listas dinâmicas. Isso ajuda o Angular a identificar quais itens mudaram! 🚀 #angulartips',
    slug: 'dicas-performance-angular',
    cover: 'https://picsum.photos/seed/performance/993/300',
    likes: 56,
    comments: [
      {
        id: '3',
        content:
          'Ótima dica! Já percebi uma melhora significativa usando trackBy.',
        author: {
          username: 'Patricia Silva',
          avatar: 'https://github.com/patricia.png',
        },
        createdAt: new Date('2024-03-18T09:30:00Z'),
      },
    ],
    author: {
      username: 'Maria Tech',
      avatar: 'https://github.com/mariatech.png',
    },
  },
];
