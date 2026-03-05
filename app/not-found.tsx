import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-24">
      <h1 className="font-display text-4xl md:text-6xl text-black mb-4">
        404
      </h1>
      <p className="body-md text-black/70 mb-8">This page could not be found.</p>
      <Link
        href="/"
        className="text-wistful hover:text-las-palmas font-medium transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
