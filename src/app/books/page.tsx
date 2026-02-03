import Link from "next/link";
import BookList from "@/components/books/book-list";
import { mockBooks } from "@/data/mock-books";

const BooksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800 mb-4"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Book Collection</h1>
          <p className="mt-2 text-gray-600">
            Browse your book collection and add new books
          </p>
        </div>

        <BookList initialBooks={mockBooks} />
      </main>
    </div>
  );
};

export default BooksPage;
