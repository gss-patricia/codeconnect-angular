import { Post } from '../models/post.model';

export function truncateBody(text: string): string {
  // Divide o texto em linhas
  const lines = text.split('\n');

  // Se tiver 3 ou menos linhas, retorna o texto original
  if (lines.length <= 3) {
    return text;
  }

  // Pega apenas as 3 primeiras linhas e adiciona reticências
  return lines.slice(0, 3).join('\n') + '...';
}

export function processPostsContent(posts: Post[]): Post[] {
  return posts.map((post) => ({
    ...post,
    body: truncateBody(post.body),
  }));
}
