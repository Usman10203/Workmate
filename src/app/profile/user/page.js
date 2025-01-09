'use client'
import UserContext from "@/context/userContext";
import { useContext } from "react";

export default function UserProfile() {
  const context = useContext(UserContext);

  return (
    <>
      <h1 className="mb-5 text-center text-xl mt-20">
        {context.user && context.user.name ? `Welcome ${context.user.name}!` : "Welcome!"}
      </h1>

      <div className="flex justify-center mt-5">
        <div className=" overflow-hidden shadow rounded-lg border w-fit  c mb-72">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-xl leading-6 font-medium text-center">
              User Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-center ">
              This is some information about the user.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
            <dl className="sm:divide-y sm:divide-gray-200">
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium ">
                  Full name
                </dt>
                <dd className="mt-1 text-lg  sm:mt-0 sm:col-span-2">
                  {context.user && context.user.name ? ` ${context.user.name}!` : "N/A"}
                </dd>
              </div>
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium ">
                  Email address
                </dt>
                <dd className="mt-1 text-lg  sm:mt-0 sm:col-span-2">
                  {context.user && context.user.email ? ` ${context.user.email}!` : "N/A"}
                </dd>
              </div>
              {/* <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium ">
                  Phone number
                </dt>
                <dd className="mt-1 text-sm  sm:mt-0 sm:col-span-2">
                  (123) 456-7890
                </dd>
              </div> */}
              <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-lg font-medium ">
                  About
                </dt>
                <dd className="mt-1 text-lg sm:mt-0 sm:col-span-2">
                  {context.user && context.user.about ? ` ${context.user.about}!` : "N/A"}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

    </>
  );
}