import type { Book } from "@/types/book";

export const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    description:
      "A story of decadence and excess, Gatsby explores the American Dream through the eyes of Nick Carraway as he becomes entangled with the mysterious millionaire Jay Gatsby and his obsession with the beautiful Daisy Buchanan.",
    imageUrl: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    description:
      "Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.",
    imageUrl: "https://covers.openlibrary.org/b/id/8228691-M.jpg",
  },
  {
    id: "3",
    title: "1984",
    description:
      "George Orwell's dystopian tale of a society ruled by Big Brother, where independent thinking is a crime and love is forbidden. Winston Smith works for the Ministry of Truth, rewriting history to suit the Party's needs.",
    imageUrl: "https://covers.openlibrary.org/b/id/7222246-M.jpg",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    description:
      "Jane Austen's witty comedy of manners follows Elizabeth Bennet as she navigates issues of morality, education, and marriage in the society of the landed gentry of early 19th-century England.",
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    imageUrl: "https://invalid-url-to-test-error-handling.example/book.jpg",
  },
];
