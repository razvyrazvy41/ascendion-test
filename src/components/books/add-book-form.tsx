"use client";

import React, { useState } from "react";
import type { Book } from "@/types/book";

type AddBookFormProps = {
  onAddBook: (book: Omit<Book, "id">) => void;
};

const AddBookForm: React.FC<AddBookFormProps> = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmedTitle = title.trim();
    if (!trimmedTitle) {
      setError("Title is required");
      return;
    }

    onAddBook({
      title: trimmedTitle,
      description: description.trim() || undefined,
      imageUrl: imageUrl.trim() || undefined,
    });

    setTitle("");
    setDescription("");
    setImageUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Add a New Book
      </h2>

      {error && (
        <div
          role="alert"
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm"
        >
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label
            htmlFor="book-title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="book-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter book title"
          />
        </div>

        <div>
          <label
            htmlFor="book-description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <textarea
            id="book-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Enter book description (optional)"
          />
        </div>

        <div>
          <label
            htmlFor="book-image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="book-image"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/cover.jpg (optional)"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
