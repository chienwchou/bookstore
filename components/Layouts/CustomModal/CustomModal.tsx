"use client";
import { useSearchParams, usePathname } from "next/navigation";
import BookForm from "../../BookForm/BookForm";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8 rounded">
            <div className="flex flex-col items-center">
              <BookForm pathname={pathname} />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Modal;
