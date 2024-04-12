import Image from "next/image";
import Link from "next/link";

import booksData from "../books-data.json";
import BookForm from "../app/components/bookForm/bookForm";


export default function Home() {
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
        {booksData['books'].map((book) => (
          <li key={book._id} className="flex flex-col items-center mb-3">
            <Image src="/book.png" quality={75} alt={book.title} width={200} height={300} />
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-lg">${book.price}</p>
            <p className="text-lg">{book.categories}</p>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
          </li>
        ))}
      </ul>
    </main>
    </>
  );
}
