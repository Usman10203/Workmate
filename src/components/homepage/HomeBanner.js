"use client";
import React from "react";
import bannerImage from "../../assets/bi.png";
import Image from "next/image";
const BannerSection = () => {
  return (
    <div className="bg-black text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-5">
        <div className="mb-4 md:mb-0 md:mr-4 flex-shrink-0">
          <Image
            src={bannerImage} // Replace with the actual path to your image
            alt="Banner"
            className="w-40 h-40 md:w-80 md:h-80 rounded-full"
            style={{ width: '400px', height: "auto" }}
          />

          {/* <Image
            src="https://img.freepik.com/free-vector/check-list-with-businessman-flat-design_79603-145.jpg?t=st=1736105152~exp=1736108752~hmac=a2ac3a9ffea7bc1fad2c6f66a6b1e31b74a13ce8d806587fe27056e8269d88b0&w=740"
            alt="Banner"
            width={320}
            height={320}
            className="w-40 h-40 md:w-80 md:h-80 "
            unoptimized
          /> */}

        </div>
        <div className="text-center md:text-left px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            Welcome to Work Mate
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Organize your tasks efficiently with our task manager app.
          </p>
          <button
            className="bg-white text-blue-500 px-4 py-2 mt-4 rounded-md shadow-md hover:shadow-lg transition duration-300"
            onClick={() => {
              console.log("Action button clicked!");
            }}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};


export default BannerSection;
