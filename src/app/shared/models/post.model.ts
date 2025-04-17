export interface Post {
  authorId: string | number;
  body: string;
  id: string;
  title: string;
  slug: string;
  cover: string;
  likes: number;
  comments: Comment[];
  markdown: string;
  author: Author;
}

export interface Comment {
  id: string | number;
  authorId: string | number;
  parentId: string | number | null;
  children: Comment[];
  postId: string | number;
  text: string;
  author: Author;
  updatedAt: Date;
}

export interface Author {
  id: string | number;
  username: string;
  name: string;
  avatar: string;
}
