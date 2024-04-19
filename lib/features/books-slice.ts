import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import booksData from "../../books-data.json";
import { BookData, BookFormData } from '@/models/book';

interface InitialState {
    books: BookData[];
}

const initialState: InitialState = {
    books: booksData.books,
};

export const books = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        addBook: (state, action: PayloadAction<BookFormData>) => {
            const lastBookIndex = state.books.length - 1;
            const lastBookId = state.books[lastBookIndex]._id;
            const payLoad = {
                _id: (parseInt(lastBookId) + 1).toString(),
                ...action.payload
            }
            state.books.push(payLoad);
        },
        deleteBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter((book: BookData) => book._id !== action.payload);
        },
        editBook: (state, action: PayloadAction<BookData>) => {
            state.books = state.books.map((book: BookData) => {
                if (book._id === action.payload._id) {
                    return action.payload;
                }
                return book;
            });
        }
    }
});

export const { addBook, deleteBook, editBook } = books.actions;
export default books.reducer;