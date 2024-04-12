"use client";
import {useSearchParams, usePathname} from "next/navigation";
import Link from "next/link";
import BookForm from "../bookForm/bookForm";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
        {modal &&
            <dialog
                className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
                <div className="bg-white m-auto p-8 rounded">
                    <div className="flex flex-col items-center">
                        <BookForm />
                        <div className="flex flex-row w-full justify-around">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Add
                        </button>
                        <Link href={pathname}>
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Close</button>
                        </Link>
                        </div>
                    </div>
                </div>
            </dialog>
        }
    </>
  );
}

export default Modal;