"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [about, setAbout] = useState("");

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch("/api/office_settings");
        const data = await res.json();
        if (data.success && data.settings.length > 0) {
          setAbout(data.settings[0].about || "");
        }
      } catch (err) {
        console.error("Failed to load about info", err);
      }
    };
    fetchAbout();
  }, []);

  return (
    <main className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-12 px-6 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-xl hover:shadow-indigo-300 transition-shadow duration-300 relative">
        
        {/* ✅ Heading */}
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-3 text-center">
          🏫 আমাদের সম্পর্কে
        </h1>

        {/* ✅ Dynamic Content */}
        <div
          className="text-gray-700 leading-relaxed text-lg tracking-wide text-justify space-y-4"
          dangerouslySetInnerHTML={{ __html: about }}
        ></div>
      </div>

      {/* ✅ Decorative Quote Icons */}
      <div className="absolute top-6 left-6 text-indigo-100 text-7xl font-serif select-none">
        ❝
      </div>
      <div className="absolute bottom-6 right-6 text-indigo-100 text-7xl font-serif select-none">
        ❞
      </div>
    </main>
  );
}
