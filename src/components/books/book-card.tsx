"use client";

import React, { useState } from "react";
import { Book } from "@/types/book";

type BookCardProps = {
  book: Book;
};

const PlaceholderImage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className="w-full h-48 bg-gray-200 flex items-center justify-center"
      role="img"
      aria-label={`Placeholder image for ${title}`}
    >
      <svg
        className="w-16 h-16 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    </div>
  );
};

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const descriptionId = `book-description-${book.id}`;
  const hasDescription = Boolean(book.description);
  const showImage = book.imageUrl && !imageError;

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 transition-shadow hover:shadow-lg">
      {showImage ? (
        <img
          src={book.imageUrl}
          alt={`Cover of ${book.title}`}
          className="w-full h-48 object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <PlaceholderImage title={book.title} />
      )}

      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {book.title}
        </h2>

        {hasDescription && (
          <>
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls={descriptionId}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded px-1 -ml-1"
            >
              {isExpanded ? "Hide" : "Show"} description
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id={descriptionId}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed">
                {book.description}
              </p>
            </div>
          </>
        )}

        {!hasDescription && (
          <p className="text-gray-400 text-sm italic">
            No description available
          </p>
        )}
      </div>
    </article>
  );
};

export default BookCard;
