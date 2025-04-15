export interface Post {
  id: string;
  title: string;
  body: string;
  slug: string;
  cover: string;
  likes: number;
  comments: Comment[];
  author: {
    username: string;
    avatar: string;
  };
}

export interface Comment {
  id: string;
  content: string;
  author: {
    username: string;
    avatar: string;
  };
  createdAt: Date;
}
