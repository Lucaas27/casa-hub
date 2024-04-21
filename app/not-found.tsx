import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className="min-h-screen flex-grow">
      <div className="container m-auto max-w-2xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-primary-light px-6 py-24 text-primary-light-foreground shadow-md md:m-0">
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-8xl text-yellow-400"></FaExclamationTriangle>
          </div>
          <div className="text-center">
            <h1 className="mb-2 mt-4 text-3xl font-bold">Page Not Found</h1>
            <p className="mb-10 text-xl text-muted-foreground">The page you are looking for does not exist.</p>
            <Link
              href="/"
              className="rounded bg-accent px-6 py-4 font-bold text-accent-foreground hover:bg-primary hover:text-primary-foreground"
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </section>
  );
};
export default NotFoundPage;
