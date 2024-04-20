import Image from "next/image";

export function Banner() {
  return (
    <section className="banner flex flex-row gap-5 py-16 px-12">
      <div className="banner-left m-5 basis-2/3 flex flex-col justify-center">
        <h1 className="banner-title font-bold text-5xl my-5">
          Welcome to the bookstore
        </h1>
        <p className="banner__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          id iste ea laboriosam, asperiores est nemo non optio nesciunt
          assumenda magnam eligendi repellat ipsum nam.
        </p>
        <div className="flex flex-row w-full my-3 gap-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Register Now
          </button>
          <button
            type="button"
            className=" bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="banner-right m-5 basis-1/3">
        <Image
          src="/bookstore.jpg"
          alt="bookstore"
          className="w-96 h-96 object-cover rounded-lg"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
}
