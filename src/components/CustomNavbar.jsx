"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="bg-blue-600 h-16 py-2 px-10 md:px-20 lg:px-32 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="#!">Workmate</a>
        </h1>
      </div>
      <div className="hidden md:block">
        <div>
          <ul className="flex space-x-5">
            {context.user && (
              <>
                <li>
                  <Link href={"/"} className="hover:text-blue-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/add-task" className="hover:text-blue-200">
                    Add Task
                  </Link>
                </li>
                <li>
                  <Link href={"/show-tasks"} className="hover:text-blue-200">
                    Show Tasks
                  </Link>
                </li>
                <li className="pl-8">
                  <Link href={"#!"}>{context.user.name}</Link>
                </li>
                <li>
                  <button onClick={doLogout}>Logout</button>
                </li>
              </>
            )}
          </ul>
        </div>
        <div>
          <ul className="flex space-x-3">
            {/* {context.user && (
              <>
                <li>
                  <Link href={"#!"}>{context.user.name}</Link>
                </li>
                <li>
                  <button onClick={doLogout}>Logout</button>
                </li>
              </>
            )} */}

            {!context.user && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>
                <li>
                  <Link href="/signup">Signup</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* {mobile responsive nav} */}

      <div className="md:hidden z-40" onClick={handleNav}>
        <h1>{isMobileMenuOpen ? 'X' : '|||'}</h1>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed bg-black inset-0 z-30">
          <div>
            <ul className="flex items-center py-28 space-y-3 flex-col">
              {!context.user && (
                <>
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/signup">Signup</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
