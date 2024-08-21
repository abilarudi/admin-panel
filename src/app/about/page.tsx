"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import for useRouter in Next.js 13+
import Link from "next/link";

const About = () => {
  const [about, setAbout] = useState({
    tagline: "",
    h1: "",
    h2: "",
    h3: "",
    content: [{ text: "" }],
    why: [{ text: "" }],
    featured: [{ text: "", highlight: false }],
    terjual: 0,
    mitra: 0,
    followers: 0,
  });
  const [notification, setNotification] = useState(""); // Notification message
  const router = useRouter();

  useEffect(() => {
    // Fetch the existing about data from the database
    const fetchAbout = async () => {
      const res = await fetch("/api/about/1"); // Assuming ID 1
      const data = await res.json();
      setAbout(data);
    };
    fetchAbout();
  }, []);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/about/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(about),
    });

    if (res.ok) {
      setNotification("Entry updated successfully!"); // Set notification message
      setTimeout(() => setNotification(""), 3000);
      router.refresh(); // Refresh the page after updating
    } else {
      console.error("Failed to update entry");
    }
  };

  const handleAddContent = () => {
    setAbout((prev) => ({
      ...prev,
      content: [...prev.content, { text: "" }],
    }));
  };

  const handleAddWhy = () => {
    setAbout((prev) => ({
      ...prev,
      why: [...prev.why, { text: "" }],
    }));
  };

  const handleAddFeatured = () => {
    setAbout((prev) => ({
      ...prev,
      featured: [...prev.featured, { text: "", highlight: false }],
    }));
  };

  return (
    <div className="container mt-9 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Update About Page Content</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <input
            type="text"
            value={about.tagline}
            onChange={(e) => setAbout({ ...about, tagline: e.target.value })}
            placeholder="Tagline"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={about.h1}
            onChange={(e) => setAbout({ ...about, h1: e.target.value })}
            placeholder="H1"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={about.h2}
            onChange={(e) => setAbout({ ...about, h2: e.target.value })}
            placeholder="H2"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            value={about.h3}
            onChange={(e) => setAbout({ ...about, h3: e.target.value })}
            placeholder="H3"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        {about.content.map((c, index) => (
          <div key={index} className="mb-4">
            <textarea
              value={c.text}
              onChange={(e) => {
                const newContent = [...about.content];
                newContent[index].text = e.target.value;
                setAbout({ ...about, content: newContent });
              }}
              placeholder="Content"
              className="border rounded w-full py-2 px-3"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddContent}
          className="mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add More Content
        </button>
        {about.why.map((w, index) => (
          <div key={index} className="mb-4">
            <textarea
              value={w.text}
              onChange={(e) => {
                const newWhy = [...about.why];
                newWhy[index].text = e.target.value;
                setAbout({ ...about, why: newWhy });
              }}
              placeholder="Why"
              className="border rounded w-full py-2 px-3"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddWhy}
          className="mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add More Why
        </button>
        {about.featured.map((f, index) => (
          <div key={index} className="mb-4">
            <textarea
              value={f.text}
              onChange={(e) => {
                const newFeatured = [...about.featured];
                newFeatured[index].text = e.target.value;
                setAbout({ ...about, featured: newFeatured });
              }}
              placeholder="Featured"
              className="border rounded w-full py-2 px-3"
            />
            <input
              type="checkbox"
              checked={f.highlight}
              onChange={(e) => {
                const newFeatured = [...about.featured];
                newFeatured[index].highlight = e.target.checked;
                setAbout({ ...about, featured: newFeatured });
              }}
              className="ml-2"
            />
            Highlight
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddFeatured}
          className="mb-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Add More Featured
        </button>
        <div className="mb-4">
          <input
            type="number"
            value={about.terjual}
            onChange={(e) =>
              setAbout({ ...about, terjual: Number(e.target.value) })
            }
            placeholder="Terjual"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={about.mitra}
            onChange={(e) =>
              setAbout({ ...about, mitra: Number(e.target.value) })
            }
            placeholder="Mitra"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            value={about.followers}
            onChange={(e) =>
              setAbout({ ...about, followers: Number(e.target.value) })
            }
            placeholder="Followers"
            className="border rounded w-full py-2 px-3"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update About
        </button>
      </form>
      {notification && <p className="text-green-500 mt-4">{notification}</p>}
    </div>
  );
};

export default About;
