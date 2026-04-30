"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {

    const userData = authClient.useSession();

    // console.log(userData)

    const user = userData?.data?.user;

    console.log(user)


  return (
    <div className="border-b px-2 bg-amber-100 w-[90%] mx-auto sticky top-0 z-50 rounded-2xl">
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
        

        <ul className="hidden md:flex items-center gap-5 text-sm">
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


        {
            !user && <div className="flex gap-4">
          <ul className="flex items-center gap-4 text-sm">
            {/* <li><FaCartArrowDown /></li> */}
            <li>
                <Link href="/signin">
              <Button className="bg-linear-to-br from-[#F6B73C] via-[#fca752] to-[#D96A1D] hover:scale-103 hover:from-yellow-500 
              hover:via-orange-600 
              hover:to-red-600">
                Sign In
              </Button>
            </Link>
            </li>
            <li>
               <Link href="/register">
              <Button className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:scale-103 hover:from-yellow-500 
              hover:via-orange-600 
              hover:to-red-600">
                Register
              </Button>
            </Link>
            </li>
          </ul>
        </div>
        }

        {
            user? 
            <div className="flex items-center gap-4">

                <p className="hidden md:block text-sm font-bold text-orange-700">Hi!, {user?.name}</p>
                  <Avatar
                  >
                            <Avatar.Image
                            alt={user?.name}
                            src={user.image}
                            referrerPolicy="no-referrer"
                            />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button onClick={() => authClient.signOut()} className="bg-linear-to-r from-[#F6B73C] via-[#F28C28] to-[#f47215] hover:scale-103 hover:from-yellow-500
              hover:via-orange-600 
              hover:to-red-600">
                Sign Out
              </Button>
            </div>
            : null
        }

        
      </nav>
    </div>
  );
};

export default Navbar;