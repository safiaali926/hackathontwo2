"use client";
import React from "react";
import { FiHeart, FiZoomIn, FiShoppingCart } from "react-icons/fi";
import { FaStar, FaRegStar } from "react-icons/fa";
import { MdGridOn, MdViewList } from "react-icons/md";
import Image from "next/image"


const products = [
    { id: 1, name: "Dictum morbi", price: "$26.00", discount: "$52.00", reviews: 80, rating: 4, image: "/e1.png" },
    { id: 2, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e2.png" },
    { id: 3, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e3.png" },
    { id: 4, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e4.png" },
    { id: 5, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e5.png" },
    { id: 6, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e6.png" },
    { id: 7, name: "Sodales sit", price: "$26.00", discount: "$52.00", reviews: 55, rating: 4, image: "/e7.png" },

    // Add more products here...
  ];

  
export default function Shoplist() {
  return (
    <div className="min-h-screen  py-10 px-6">

           {/* Top Section */}
           <div className=" max-w-7xl mx-auto  bg-white p-4  rounded-lg mb-6">
          <div className="flex justify-between items-center">
            {/* Title and Results */}
            <div>
              <h1 className="text-2xl font-bold text-[#151875]">Ecommerce Accesories & Fashion item</h1>
              <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
            </div>
            {/* Filters */}
            <div className="flex space-x-4  items-center">
              {/* Per Page */}
              <div className="flex items-center space-x-2">
                <label htmlFor="per-page" className="text-[#151875] text-sm">Per Page:</label>
                <input
                  type="number"
                  id="per-page"
                  className="border border-gray-300 rounded px-2 py-1 w-16 text-sm"
                  defaultValue={10}
                />
              </div>
              {/* Sort By */}
              <div className="flex items-center space-x-2">
                <label htmlFor="sort-by" className="text-[#151875] text-sm">Sort By:</label>
                <select
                  id="sort-by"
                  className="border border-gray-300 rounded px-2 py-1 text-sm"
                >
                  <option value="best-match text-gray-500">Best Match</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
                <span><div className="text-[#151875]">View:</div></span> </div>
              {/* View Options */}
              <div className="flex space-x-2"> 
                <button className="p-2 border rounded bg-gray-100 hover:bg-gray-200">
                <MdGridOn className="text-gray-600 text-lg" />
                </button>
                <button className="p-2 border rounded bg-gray-100 hover:bg-gray-200">
                  <MdViewList className="text-gray-600 text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      

          {/* Product List */}
          <div className="md:col-span-3 grid grid-cols-1 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden flex p-4">
                {/* Product Image */}
                <div className=" bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                  <Image src={product.image} alt={product.name} width={284} height={197} />
                </div>

                {/* Product Details */}
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg font-semibold text-[#151875]">{product.name}</h3>
                 
                  <p className=" flex gap-x-3 text-lg text-[#151875] mt-2 items-center">{product.price} <span className="line-through text-pink-500">{product.discount} </span> <span className="flex">
                      {Array.from({ length: product.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      {Array.from({ length: 5 - product.rating }).map((_, i) => (
                        <FaRegStar key={i} className="text-gray-300" />
                      ))}
                    </span></p>
                  <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                
                {/* Action Icons */}
                <div className="flex flex-row space-y-2 items-center text-[#151875] ">
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200">
                    <FiZoomIn className=" text-xl" />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200">
                    <FiHeart className=" text-xl" />
                  </button>
                  <button className="flex items-center justify-center w-10 h-10 bg-gray-100 m-3 rounded-full hover:bg-gray-200">
                    <FiShoppingCart className=" text-xl" />
                  </button>
                </div> </div>

               
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
