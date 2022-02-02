import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-fuchsia-700 py-20">
      <div className="container">
        <p className="text-center text-base text-fuchsia-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline mx-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          con
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 inline mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          y con prisa por{' '}
          <a
            href="https://baumannzone.dev"
            target="_blank"
            rel="noreferrer"
            className=" text-fuchsia-300 hover:text-white hover:underline focus:outline-none focus:ring focus:ring-offset-2 focus:ring-fuchsia-200 border-red-300 rounded-md"
          >
            Jorge Baumann
          </a>
        </p>
      </div>
    </footer>
  );
}
