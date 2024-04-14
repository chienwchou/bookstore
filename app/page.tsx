"use client";
import Link from "next/link";
import { useAppSelector } from "@/lib/store";
import { BookData } from "./models/book";
import { BookCard } from "./components/bookCard/bookCard";

export default function Home() {
  const booksData = useAppSelector((state) => {
    return state.bookReducer.books;
  });

  return (
    <>
      <main>
        <div className="m-5">
          <h1 className="text-5xl font-bold text-center">Bookstore</h1>
          <nav className="flex justify-between items-center">
            <Link href="?modal=true">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                New book
              </button>
            </Link>
          </nav>
        </div>
      </main>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 p-10">
        <ul className="grid grid-cols-3 gap-4">
          {booksData.map((book: BookData) => (
            <li key={book._id} className="flex flex-col items-center mb-3">
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
