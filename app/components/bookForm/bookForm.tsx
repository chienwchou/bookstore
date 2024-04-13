"use client";
import { useAppSelector } from "@/lib/store";
import { useSearchParams } from "next/navigation";
import "./bookForm.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookData, BookFormData } from "@/app/models/book";

export default function BookForm({ pathname }: { pathname: string }) {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");
  const id = searchParams.get("id");
  const booksData = useAppSelector((state) => {
    return state.bookReducer.booksData;
  });
  const [bookData, setBookData] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
  } as BookFormData);

  useEffect(() => {
    if (action === "edit" && id) {
      const book = booksData.books.find((book: BookData) => {
        return book._id.toString() === id;
      });

      if (book) {
        setBookData(book);
      }
    }
  }, [booksData, action, id]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setBookData({
      ...bookData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(bookData);
  };

  let header = "Add a new book";
  switch (action) {
    case "edit":
      header = "Edit the book";
      break;
    default:
  }

  return (
    <div className="m-5">
      <h1 className="text-2xl font-semibold mb-5">{header}</h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Title:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="text"
            name="title"
            placeholder="Title"
            value={bookData.title}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Price:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="number"
            name="price"
            placeholder="Price"
            value={bookData.price}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Category:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="text"
            name="category"
            placeholder="Category"
            value={bookData.category}
            onChange={handleChange}
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Description:</span>
          <textarea
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            name="description"
            placeholder="Description"
            value={bookData.description}
            onChange={handleChange}
          />
        </label>
        <div className="flex flex-row w-full justify-around">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
          <Link href={pathname}>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Close
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
