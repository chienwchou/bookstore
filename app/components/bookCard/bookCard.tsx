import { BookData } from "@/app/models/book";
import Link from "next/link";
import Image from "next/image";

export function BookCard({ book }: { book: BookData }) {
  return (
    <>
      <div>
        <Link
          className="flex flex-col items-center"
          href={"?modal=true&action=edit&id=" + book._id}
        >
          <Image src="/book.png" alt={book.title} width={200} height={300} />
          <h2 className="text-xl font-semibold text-center">{book.title}</h2>
          <p className="text-lg text-center">${book.price}</p>
          <p className="text-lg text-center">{book.category}</p>
        </Link>
      </div>
      <Link href={"?modal=true&action=delete&id=" + book._id}>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </Link>
    </>
  );
}
