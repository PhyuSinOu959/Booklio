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
  description: string;
  publishedDate: string;
  pages: number;
  isbn: string;
}

export const books: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://example.com/gatsby.jpg',
    category: 'Fiction',
    rating: 4.5,
    description: 'A story of decadence and excess, Gatsby explores the American Dream in the 1920s.',
    publishedDate: '1925',
    pages: 180,
    isbn: '978-0743273565'
  },
  {
    id: '2',
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    coverImage: 'https://example.com/think.jpg',
    category: 'Self Help',
    rating: 4.8,
    description: 'One of the earliest self-help books that explores the philosophy of personal achievement.',
    publishedDate: '1937',
    pages: 238,
    isbn: '978-1585424337'
  },
  {
    id: '3',
    title: 'The Art of War',
    author: 'Sun Tzu',
    coverImage: 'https://example.com/artofwar.jpg',
    category: 'Strategy',
    rating: 4.7,
    description: 'An ancient Chinese military treatise that has influenced both military and business tactics.',
    publishedDate: '5th century BCE',
    pages: 288,
    isbn: '978-1590302255'
  },
  {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://example.com/1984.jpg',
    category: 'Fiction',
    rating: 4.6,
    description: 'A dystopian social science fiction novel that explores totalitarianism and surveillance.',
    publishedDate: '1949',
    pages: 328,
    isbn: '978-0451524935'
  },
  {
    id: '5',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: 'https://example.com/hobbit.jpg',
    category: 'Fiction',
    rating: 4.8,
    description: 'A fantasy novel about the adventures of Bilbo Baggins, a hobbit who embarks on an unexpected journey.',
    publishedDate: '1937',
    pages: 310,
    isbn: '978-0547928227'
  },
  {
    id: '6',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverImage: 'https://example.com/pride.jpg',
    category: 'Fiction',
    rating: 4.7,
    description: 'A romantic novel following the emotional development of Elizabeth Bennet who learns not to judge by first impressions.',
    publishedDate: '1813',
    pages: 432,
    isbn: '978-0141439518'
  }
];