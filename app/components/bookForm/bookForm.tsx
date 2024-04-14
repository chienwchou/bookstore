"use client";
import { AppDispatch, useAppSelector } from "@/lib/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BookData, BookFormData } from "@/app/models/book";
import { useDispatch } from "react-redux";
import { addBook, deleteBook, editBook } from "@/lib/features/books-slice";

export default function BookForm({ pathname }: { pathname: string }) {
  const searchParams = useSearchParams();
  const action = searchParams.get("action");
  const id = searchParams.get("id");
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const booksData = useAppSelector((state) => {
    return state.bookReducer.books;
  });
  const [bookData, setBookData] = useState({
    title: "",
    price: 0,
    category: "",
    description: "",
  } as BookFormData);

  useEffect(() => {
    if ((action === "edit" || "delete") && id) {
      const book = booksData.find((book: BookData) => {
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
    switch (action) {
      case "edit":
        if (!id) return;
        dispatch(
          editBook({
            _id: id,
            ...bookData,
          })
        );
        break;
      case "delete":
        if (!id) return;
        dispatch(deleteBook(id));
        break;
      default:
        dispatch(addBook(bookData));
    }
    router.push(pathname);
  };

  let header = "Add a new book";
  let button = "Add";
  switch (action) {
    case "edit":
      header = "Edit the book";
      button = "Edit";
      break;
    case "delete":
      header = "Delete the book";
      button = "Delete";
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
            disabled={action === "delete"}
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
            disabled={action === "delete"}
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
            disabled={action === "delete"}
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
            disabled={action === "delete"}
          />
        </label>
        <div className="flex flex-row w-full justify-around my-3">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {button}
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
