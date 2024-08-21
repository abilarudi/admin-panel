"use client"; // Mark this file as a Client Component

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {" "}
      {/* Apply background color here */}
      <div className="container mx-auto pt-20 p-4">
        <h1 className="text-4xl font-bold text-center mb-10">
          Welcome to Abila Admin Panel
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <LinkCard
            href="/home"
            title="Update Home"
            description="Manage and update the home page content."
          />
          <LinkCard
            href="/about"
            title="Update About"
            description="Edit the about page content and details."
          />
          <LinkCard
            href="/product"
            title="Update Product"
            description="Update product information and details."
          />
          <LinkCard
            href="/keunggulan"
            title="Update Keunggulan Minyak Kelapa"
            description="Edit the benefits of coconut oil."
          />
          <LinkCard
            href="/faq"
            title="Update FAQ"
            description="Manage frequently asked questions."
          />
          <LinkCard
            href="/contact"
            title="Update Contact"
            description="Update contact information and details."
          />
        </div>
      </div>
    </div>
  );
};

const LinkCard = ({ href, title, description }) => (
  <Link
    className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
    href={href}
  >
    <h2 className="text-2xl text-gray-800 font-bold mb-2">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </Link>
);

export default Home;
