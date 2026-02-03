import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Test for Ascendion
          </h1>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Test Description
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              This project demonstrates a production-quality React component
              implementation showcasing fundamental React concepts and best
              practices.
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-6">
              Requirements Implemented:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reusable Book List component with TypeScript</li>
              <li>
                Individual Book Cards with title, description, and optional
                images
              </li>
              <li>Description toggle functionality with smooth animations</li>
              <li>Form to add new books dynamically</li>
              <li>Image error handling with placeholder fallback</li>
              <li>
                Full accessibility support (ARIA attributes, keyboard
                navigation)
              </li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Unit tests with Vitest and React Testing Library</li>
            </ul>

            <h3 className="text-lg font-medium text-gray-900 mt-6">
              Technologies Used:
            </h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Next.js 16 with App Router</li>
              <li>React 19</li>
              <li>TypeScript</li>
              <li>Tailwind CSS v4</li>
              <li>Vitest + React Testing Library</li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              View Book Collection
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
