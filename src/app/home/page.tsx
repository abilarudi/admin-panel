"use client"; // Mark this file as a Client Component

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import for useRouter in Next.js 13+
import Link from "next/link";

const Home = () => {
  const [post, setPost] = useState({
    tagline: "",
    h1: "",
    h2: "",
    h3: "",
    content: "",
  });
  const [notification, setNotification] = useState(""); // Notification message

  const router = useRouter();

  useEffect(() => {
    // Fetch the existing home data from the database
    const fetchPost = async () => {
      const res = await fetch("/api/homes/8"); // Assuming there's only one entry
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/homes/8", {
      // Assuming you're updating entry with ID 1
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (res.ok) {
      setNotification("Entry updated successfully!"); // Set notification message
      setTimeout(() => setNotification(""), 3000);
      router.refresh(); // Refresh the page after updating
    } else {
      console.error("Failed to update entry");
    }
  };

  return (
    <div className="container mt-9 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update Home Page Content</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <input
            type="text"
            value={post.tagline}
            onChange={(e) => setPost({ ...post, tagline: e.target.value })}
            placeholder="Tagline"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={post.h1}
            onChange={(e) => setPost({ ...post, h1: e.target.value })}
            placeholder="H1"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={post.h2}
            onChange={(e) => setPost({ ...post, h2: e.target.value })}
            placeholder="H2"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={post.h3}
            onChange={(e) => setPost({ ...post, h3: e.target.value })}
            placeholder="H3"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <textarea
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            placeholder="Content"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Entry
        </button>
      </form>
      {notification && (
        <div className="bg-green-500 text-white p-2 rounded mb-4">
          {notification}
        </div>
      )}
      <ul>
        <li key={post.id} className="mb-2">
          <h3 className="font-bold">{post.tagline}</h3>
          <h1>{post.h1}</h1>
          <h2>{post.h2}</h2>
          <h3>{post.h3}</h3>
          <p>{post.content}</p>
          {/* <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
            >
              Delete
            </button> */}
        </li>
      </ul>
      <div className="flex mt-5 justify-between">
        <Link
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/"
        >
          Main Menu
        </Link>
        <Link
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href="/about"
        >
          About Page Content
        </Link>
      </div>
    </div>
  );
};

export default Home;
