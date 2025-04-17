import { Post } from '../models/post.model';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    title: 'TypeScript e suas vantagens',
    body: 'TypeScript é incrível para desenvolvimento web! Com tipos estáticos, autocomplete e detecção de erros em tempo de compilação, a produtividade aumenta muito. #typescript #webdev',
    slug: 'typescript-e-suas-vantagens',
    cover: 'https://picsum.photos/seed/typescript/993/300',
    likes: 42,
    markdown: `<pre><code>// Exemplo de tipos no TypeScript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // opcional
}

// Usando tipos
const user: User = {
  id: 1,
  name: "João",
  email: "joao@email.com"
};

// Função com tipos
function greet(user: User): string {
  return \`Olá, \${user.name}!\`;
}</code></pre>`,
    author: {
      id: '1',
      username: 'p_sivla',
      name: 'Patricia Silva',
      avatar:
        'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
    },
    authorId: '1',
    comments: [
      {
        id: '1',
        authorId: '2',
        parentId: null,
        postId: '1',
        text: 'Excelente artigo! TypeScript realmente faz toda a diferença no desenvolvimento.',
        author: {
          id: '2',
          username: 'dev_john',
          name: 'John Doe',
          avatar:
            'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
        },
        children: [
          {
            id: '2',
            authorId: '1',
            parentId: '1',
            postId: '1',
            text: 'Concordo totalmente! O autocomplete é uma mão na roda.',
            author: {
              id: '1',
              username: 'p_sivla',
              name: 'Patricia Silva',
              avatar:
                'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
            },
            children: [],
            updatedAt: new Date('2023-06-15T14:30:00'),
          },
        ],
        updatedAt: new Date('2023-06-15T14:00:00'),
      },
    ],
  },
  {
    id: '2',
    title: 'Novidades do Angular 19',
    body: 'Angular 19 trouxe muitas novidades interessantes! Os novos recursos de controle de fluxo no template e o novo sistema de SSR são game-changers. #angular #frontend',
    slug: 'novidades-angular-17',
    cover: 'https://picsum.photos/seed/angular/993/300',
    likes: 38,
    markdown: `<pre><code>// Novo controle de fluxo no Angular 19
@Component({
  template: \`
    @if (user.isLoggedIn) {
      <p>Bem-vindo, {{user.name}}!</p>
    } @else {
      <p>Por favor, faça login.</p>
    }
  \`
})
export class UserComponent {
  user = {
    isLoggedIn: true,
    name: 'João'
  };
}</code></pre>`,
    author: {
      id: '2',
      username: 'dev_john',
      name: 'John Doe',
      avatar:
        'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
    },
    authorId: '2',
    comments: [],
  },
  {
    id: '3',
    title: 'CSS Grid e Flexbox: Layout Moderno',
    body: 'CSS Grid e Flexbox revolucionaram o layout web. Aqui estão algumas dicas para criar layouts responsivos e modernos usando essas tecnologias.\n\nDica 1: Use Grid para layouts de página\nDica 2: Flexbox para componentes\nDica 3: Variáveis CSS para temas',
    slug: 'css-grid-flexbox-layout-moderno',
    cover: 'https://picsum.photos/seed/css/993/300',
    likes: 56,
    markdown: `<pre><code>/* Exemplo de Grid Layout */
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

/* Exemplo de Flexbox */
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}</code></pre>`,
    author: {
      id: '3',
      username: 'css_master',
      name: 'Maria Santos',
      avatar:
        'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
    },
    authorId: '3',
    comments: [
      {
        id: '3',
        authorId: '1',
        parentId: null,
        postId: '3',
        text: 'Adorei as dicas! Grid realmente facilita muito a criação de layouts complexos.',
        author: {
          id: '1',
          username: 'p_sivla',
          name: 'Patricia Silva',
          avatar:
            'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
        },
        children: [],
        updatedAt: new Date('2023-07-10T09:15:00'),
      },
    ],
  },
  {
    id: '4',
    title: 'React vs Angular: Qual escolher?',
    body: 'React e Angular são dois dos frameworks mais populares para desenvolvimento web. Vamos comparar suas características e ajudar você a escolher o melhor para seu projeto.\n\nReact: Mais flexível, ecossistema rico\nAngular: Mais estruturado, tudo incluído\n\nA escolha depende do seu caso de uso e experiência da equipe.',
    slug: 'react-vs-angular-qual-escolher',
    cover: 'https://picsum.photos/seed/frameworks/993/300',
    likes: 72,
    markdown: `<pre><code>// React Component
function Greeting({ name }) {
  return <h1>Olá, {name}!</h1>;
}

// Angular Component
@Component({
  selector: 'app-greeting',
  template: '<h1>Olá, {{name}}!</h1>'
})
export class GreetingComponent {
  @Input() name: string;
}</code></pre>`,
    author: {
      id: '4',
      username: 'framework_guru',
      name: 'Carlos Oliveira',
      avatar:
        'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
    },
    authorId: '4',
    comments: [],
  },
  {
    id: '5',
    title: 'Introdução ao Node.js',
    body: 'Node.js permite executar JavaScript no servidor, abrindo um mundo de possibilidades para desenvolvimento full-stack. Vamos explorar os conceitos básicos e como começar.\n\nPrincipais benefícios:\n- I/O não bloqueante\n- Grande ecossistema de pacotes\n- Comunidade ativa',
    slug: 'introducao-ao-nodejs',
    cover: 'https://picsum.photos/seed/nodejs/993/300',
    likes: 45,
    markdown: `<pre><code>// Exemplo de servidor HTTP básico
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Olá, mundo!');
});

server.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});</code></pre>`,
    author: {
      id: '5',
      username: 'node_expert',
      name: 'Ana Beatriz',
      avatar:
        'https://raw.githubusercontent.com/gss-patricia/code-connect-assets/main/authors/anabeatriz_dev.png',
    },
    authorId: '5',
    comments: [],
  },
];
