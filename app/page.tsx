"use client";

import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/lib/store";
import { BookData } from "./models/book";

export default function Home() {
  const booksData = useAppSelector((state) => {
    return state.bookReducer.booksData;
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
          {booksData["books"].map((book: BookData) => (
            <li key={book._id} className="flex flex-col items-center mb-3">
              <div>
                <Link
                  className="flex flex-col items-center"
                  href={"?modal=true&action=edit&id=" + book._id}
                >
                  <Image
                    src="/book.png"
                    quality={75}
                    alt={book.title}
                    width={200}
                    height={300}
                  />
                  <h2 className="text-xl font-semibold text-center">
                    {book.title}
                  </h2>
                  <p className="text-lg text-center">${book.price}</p>
                  <p className="text-lg text-center">{book.category}</p>
                </Link>
              </div>
              <Link href={"?modal=true&action=delete&id=" + book._id}>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Delete
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
