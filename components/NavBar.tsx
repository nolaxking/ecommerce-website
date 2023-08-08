"use client";

import {
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  const { isSignedIn } = useUser();
 // console.log(isSignedIn);

  return (
    <header className="flex flex-col h-[62vh] w-64 rounded-md shadow   border-gray-600 border   text-xl ">
      <nav className=" ">
        <Link href="/" className="flex items-center justify-center  py-4 px-6">
          TechPrime
        </Link>
        {!isSignedIn ? (
          <div>
            <button className="btn"><Link prefetch={true}href={"/sign-up"}> Sign-Up</Link></button>
            <button className="btn"><Link prefetch={true}href={"/sign-in"}>Sign-In </Link></button>
            
            
          </div>
        ) : (
          <div>
            <UserButton afterSignOutUrl="/"></UserButton>
          </div>
        )}
        <ul className="mt-6 p-8">
          <li className="">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">
               <Link prefetch={true}href={"categories/phones"}>Phones</Link> 
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <Link prefetch={true} href={"categories/phones/apple"}>Apple</Link>
                </li>
                <li>
                <Link prefetch={true} href={"categories/phones/samsung"}>Samsung</Link>
                </li>
                <li>
                <Link prefetch={true} href={"categories/phones/google"}>Google</Link>
                </li>
              </ul>
            </div>
          </li>
          <li className="mt-6">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">
              <Link href={"categories/watches"}>Watches</Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
            <Link prefetch={true} href={"categories/watches/applewatch"}>Apple watch</Link>
                </li>
                <li>
        <Link  prefetch={true} href={"categories/watches/samsungwatch"}>Samsung</Link>
                </li>
                <li>
            <Link  prefetch={true} href={"categories/watches/googlewatch"}>Google</Link>
                </li>
                
              </ul>
            </div>
          </li>
          <li className="mt-6">
            <div className="dropdown dropdown-hover">
              <label tabIndex={0} className="btn m-1">
              <Link href={"categories/accessories"}>accessories</Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <Link prefetch={true} href={"categories/accessories/appleaccessories"}>Apple</Link>
                </li>
                <li>
                <Link prefetch={true} href={"categories/accessories/samsungaccessories"}>Samsung</Link>
                </li>
                <li>
        <Link prefetch={true} href={"categories/accessories/googleaccessories"}>Google</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
