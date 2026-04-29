"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="border-b px-2 bg-amber-100 w-[90%] mx-auto ">
      <nav className=" flex justify-between items-center  py-3  mx-auto w-full">
        <Link href={"/"}>
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            loading="eager"
            width={30}
            height={30}
            className="object-cover h-auto w-auto"
          />
          <h3 className="font-black text-lg bg-linear-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Summer Essentials
          </h3>
        </div> </Link>
        

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/products"}>All Products</Link>
          </li>
          <li>
            <Link href={"/my-profile"}>My Profile</Link>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-sm">
            <li>
                <Link href="/signin">
              <Button className="bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500">
                Log In
              </Button>
            </Link>
            </li>
            <li>
               <Link href="/register">
              <Button className="bg-linear-to-r from-yellow-500 via-orange-500 bg-red-500">
                Register
              </Button>
            </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;