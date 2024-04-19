
export interface BookFormData {
    title: string;
    price: number;
    category: string;
    description: string;
}

export interface BookData extends BookFormData {
    _id: string;
}
