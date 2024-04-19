"use client";
import { useAppSelector } from "@/lib/store";
import { BookData } from "@/models/book";
import { BookCard } from "@/components/BookCard/BookCard";

export default function Home() {
  const booksData = useAppSelector((state) => {
    return state.bookReducer.books;
  });

  return (
    <>
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
