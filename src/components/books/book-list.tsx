"use client";

import React, { useState } from "react";
import type { Book } from "@/types/book";
import BookCard from "./book-card";
import AddBookForm from "./add-book-form";

type BookListProps = {
  initialBooks: Book[];
};

const BookList: React.FC<BookListProps> = ({ initialBooks }) => {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const handleAddBook = (newBook: Omit<Book, "id">) => {
    const book: Book = {
      ...newBook,
      id: crypto.randomUUID(),
    };
    setBooks((prev) => [...prev, book]);
  };

  return (
    <div className="space-y-8">
      <AddBookForm onAddBook={handleAddBook} />

      {books.length === 0 ? (
        <p className="text-center text-gray-500 py-8">
          No books yet. Add your first book above!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
