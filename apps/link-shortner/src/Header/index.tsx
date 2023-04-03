import React, { useContext } from "react";
import { FiLogIn, GoThreeBars } from "../../icons";
import { AiOutlineBell } from "../../icons";
import { AiOutlineEdit } from "../../icons";
import { signIn } from "next-auth/react";
import { signOut } from "next-auth/react";
import { FiLogOut } from "../../icons";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { GlobalContext } from "../../context/GlobalContext";
import Link from "next/link";

export default function Header() {
  const { data: sessionData, status } = useSession();
  const { isWriteModalOpen, setIsWriteModalOpen } = useContext(GlobalContext);
  return (
    <header className="flex grid h-20 w-full grid-cols-3 flex-row items-center border-b py-4 px-12">
      {/* This is the header */}
      <div>
        <GoThreeBars />
      </div>
      <Link href="/" className="cursor-pointer">
        <div className="mx-auto flex cursor-pointer justify-center  text-3xl font-light uppercase text-black">
          T3 Ultimate Blog
        </div>
      </Link>
      {status === "authenticated" ? (
        <div className="flex items-center justify-end gap-4 ">
          <div>
            <AiOutlineBell />
          </div>
          <div>
            <div className="h-9 w-9 rounded-full bg-gray-600">
              {" "}
              <Image
                src={sessionData.user.image}
                alt={sessionData.user.name}
                className="h-9 w-9 rounded-full border-2"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="flex items-center justify-center gap-1 rounded-lg  border-2 border-gray-300 bg-white  p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition  hover:border-black hover:text-gray-700 hover:shadow-black"
            >
              <AiOutlineEdit />
              Write
            </button>
          </div>
          <div>
            <button
              onClick={() => signOut()}
              className="flex items-center justify-center gap-1 rounded-lg border-2  border-gray-300 bg-white  p-2 px-3 shadow-[1.0px_1.0px_0px_0px_rgba(109,40,217)] shadow-gray-300 transition hover:border-black hover:shadow-black"
            >
              <FiLogOut />
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-4">
          {/* <div>
          <AiOutlineBell />
        </div>
        <div>
          <div className="h-6 w-6 rounded-full bg-gray-600"></div>
        </div> */}
          <div>
            <button
              onClick={() => signIn()}
              className="flex items-center justify-center gap-1 rounded-lg border-2 p-1 px-3 transition hover:border-gray-700 hover:text-gray-700"
            >
              <FiLogIn />
              Sign In
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
