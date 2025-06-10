export const categories = [
  {
    id: 1,
    name: 'Fiction',
  },
  {
    id: 2,
    name: 'Non-Fiction',
  },
  {
    id: 3,
    name: 'Biography',
  },
  {
    id: 4,
    name: 'Science Fiction',
  },
  {
    id: 5,
    name: 'Mystery',
  },
  {
    id: 6,
    name: 'Self-Help',
  },
];

export interface Book {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  category: string;
  rating: number;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://example.com/gatsby.jpg',
    category: 'Fiction',
    rating: 4.5
  },
  {
    id: '2',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    coverImage: 'https://example.com/think.jpg',
    category: 'Self Help',
    rating: 4.8
  },
  {
    id: '3',
    title: 'The Art of War',
    author: 'Sun Tzu',
    coverImage: 'https://example.com/artofwar.jpg',
    category: 'Strategy',
    rating: 4.7
  },
  {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://example.com/1984.jpg',
    category: 'Fiction',
    rating: 4.6
  }
];