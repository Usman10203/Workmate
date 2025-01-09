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
    // <nav className="bg-blue-600 h-16 py-2 px-10 md:px-20 lg:px-32 flex justify-between items-center">
    //   <div className="brand">
    //     <h1 className="text-2xl font-bold tracking-wide text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
    //       <Link href="/" className=" transition duration-300 ease-in-out">
    //         📋Workmate
    //       </Link>

    //     </h1>

    //   </div>
    //   <div className="hidden md:block">
    //     <div>
    //       <ul className="flex space-x-5">
    //         {context.user && (
    //           <>
    //             <li>
    //               <Link href={"/"} className="hover:text-blue-200">
    //                 Home
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href="/add-task" className="hover:text-blue-200">
    //                 Add Task
    //               </Link>
    //             </li>
    //             <li>
    //               <Link href={"/show-tasks"} className="hover:text-blue-200">
    //                 Show Tasks
    //               </Link>
    //             </li>
    //             <li className="pl-8">
    //               <Link href={"/profile/user"}>{context.user.name}</Link>
    //             </li>
    //             <li>
    //               <button onClick={doLogout}>Logout</button>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //     <div>
    //       <ul className="flex space-x-3">
    //         {/* {context.user && (
    //           <>
    //             <li>
    //               <Link href={"#!"}>{context.user.name}</Link>
    //             </li>
    //             <li>
    //               <button onClick={doLogout}>Logout</button>
    //             </li>
    //           </>
    //         )} */}

    //         {!context.user && (
    //           <>
    //             <li>
    //               <Link href="/login">Login</Link>
    //             </li>
    //             <li>
    //               <Link href="/signup">Signup</Link>
    //             </li>
    //           </>
    //         )}
    //       </ul>
    //     </div>
    //   </div>

    //   {/* {mobile responsive nav} */}

    //   <div className="md:hidden z-40" onClick={handleNav}>
    //     {isMobileMenuOpen ? (
    //       <>
    //         <h1 className="text-xl font-bold">X</h1>
    //       </>
    //     ) : (
    //       // Hamburger icon with 3 bars
    //       <div className="space-y-1">
    //         <div className="w-6 h-0.5 bg-black"></div>
    //         <div className="w-6 h-0.5 bg-black"></div>
    //         <div className="w-6 h-0.5 bg-black"></div>
    //       </div>

    //     )}
    //   </div>


    //   {isMobileMenuOpen && (
    //     <div className="md:hidden fixed bg-black inset-0 z-30">
    //       <div>
    //         <ul className="flex items-center py-28 space-y-3 flex-col">
    //           {!context.user && (
    //             <>
    //               <li>
    //                 <Link href="/login">Login</Link>
    //               </li>
    //               <li>
    //                 <Link href="/signup">Signup</Link>
    //               </li>
    //             </>
    //           )}
    //         </ul>
    //       </div>
    //     </div>
    //   )}
    // </nav>
    <nav className="bg-blue-600 h-16 flex justify-between items-center px-10 md:px-20 lg:px-32">
      {/* Brand */}
      <h1 className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "Poppins, sans-serif" }}>
        <Link href="/">📋Workmate</Link>
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-5 text-white">
        {context.user ? (
          <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/add-task">Add Task</Link></li>
            <li><Link href="/show-tasks">Show Tasks</Link></li>
            {/* <li className="pl-8"><Link href="/profile/user">{context.user.name}</Link></li> */}
            <li>
              <Link href="/profile/user">
                <img
                  src="https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo.png"
                  style={{ width: "30px", height: "30px" }}
                  className="rounded-full object-cover"
                />
              </Link>
            </li>

            <li><button onClick={doLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/signup">Signup</Link></li>
          </>
        )}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden z-40" onClick={handleNav}>
        {isMobileMenuOpen ? (
          <h1 className="text-white text-xl font-bold">X</h1>
        ) : (
          <div className="space-y-1">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <ul className="md:hidden fixed inset-0 bg-black z-30 flex flex-col items-center text-white text-xl space-y-6 pt-28">
          {context.user ? (
            <>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/add-task">Add Task</Link></li>
              <li><Link href="/show-tasks">Show Tasks</Link></li>
              {/* <li><Link href="/profile/user">{context.user.name}</Link></li> */}
              <li>
                <Link href="/profile/user">
                  <img
                    src="https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo.png"
                    style={{ width: "30px", height: "30px" }}
                    className="rounded-full object-cover"
                  />
                </Link>
              </li>
              <li><button onClick={doLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link href="/login">Login</Link></li>
              <li><Link href="/signup">Signup</Link></li>
            </>
          )}
        </ul>
      )}
    </nav>

  );
};

export default CustomNavbar;
