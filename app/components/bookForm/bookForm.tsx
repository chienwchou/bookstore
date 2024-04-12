import "./bookForm.css";

export default function BookForm() {
  return (
    <div className="m-5">
      <h1 className="text-2xl font-semibold mb-5">Add a new book</h1>
      <form className="flex flex-col gap-2">
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Title:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="text"
            name="title"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Price:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="number"
            name="price"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Category:</span>
          <input
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            type="text"
            name="category"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-semibold mb-2">Description:</span>
          <textarea
            className="w-full p-2 text-gray-900 border border-gray-300 rounded-lg"
            name="description"
          />
        </label>
      </form>
    </div>
  );
}
