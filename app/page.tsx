import Image from "next/image";
import booksData from "../books-data.json";

export default function Home() {
  return (
    <>
    <main>
      <h1 className="text-5xl font-bold text-center">Bookstore</h1>
      <nav className="flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New book
        </button>
      </nav>
    </main>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="grid grid-cols-3 gap-4">
        {booksData['books'].map((book) => (
          <li key={book._id} className="flex flex-col items-center mb-3">
            <Image src="/book.png" alt={book.title} width={200} height={300} />
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
