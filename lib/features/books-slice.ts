import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import booksData from "../../books-data.json";

interface InitialState {
    booksData: any;
}

const initialState: InitialState = {
    booksData
};

export const books = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {
        addBook: (state, action: PayloadAction<any>) => {
            state.booksData.books.push(action.payload);
        },
        deleteBook: (state, action: PayloadAction<any>) => {
            state.booksData.books = state.booksData.books.filter((book: any) => book._id !== action.payload);
        },
        editBook: (state, action: PayloadAction<any>) => {
            state.booksData.books = state.booksData.books.map((book: any) => {
                if (book._id === action.payload._id) {
                    return action.payload;
                }
                return book;
            });
        }
    }
});

export const { addBook, deleteBook } = books.actions;
export default books.reducer;