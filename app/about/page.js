"use client";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const [about, setAbout] = useState(""); // ✅ শুরুতে স্ট্রিং

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch("/api/office_settings");
        const data = await res.json();
        if (data.success && data.settings.length > 0) {
          setAbout(data.settings[0].about || ""); // ✅ প্রথম রেকর্ডের about নিচ্ছে
        }
      } catch (err) {
        console.error("Failed to load about info", err);
      }
    };
    fetchAbout();
  }, []);

  return (
    <main className="p-10 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-xl 
        hover:shadow-indigo-300 transition-shadow duration-300">
        
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 border-b-2 border-indigo-200 pb-3 text-center">
          🏫 আমাদের সম্পর্কে
        </h1>

        {/* ✅ Dynamic Content */}
        <div
          className="text-gray-700 leading-relaxed text-lg space-y-4 tracking-wide"
          dangerouslySetInnerHTML={{ __html: about }}
        />
      </div>
    </main>
  );
}
