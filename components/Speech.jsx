import { useEffect, useState } from "react";

export default function Speech() {
  const [speech, setHeadSpeech] = useState("");

  useEffect(() => {
    const fetchHeadSpeech = async () => {
      try {
        const res = await fetch("/api/office_settings");
        const data = await res.json();
        if (data.success && data.settings.length > 0) {
          setHeadSpeech(data.settings[0].headSpeech || "");
        }
      } catch (err) {
        console.error("Failed to load head speech", err);
      }
    };
    fetchHeadSpeech();
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-50 via-white to-indigo-100 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-xl p-8 
        hover:shadow-indigo-300 transition-shadow duration-300">
        
        {/* ✅ Head Teacher Image */}
        <div className="flex-shrink-0">
          <img
            src="/images/head.jpg"
            alt="Head Teacher"
            className="h-52 w-52 rounded-full shadow-lg border-4 border-indigo-200"
          />
        </div>

        {/* ✅ Speech Content */}
        <div className="flex-1">
          <h2 className="text-3xl font-extrabold text-indigo-700 border-b-2 border-indigo-200 pb-2 mb-4">
            প্রধান শিক্ষকের বক্তব্য
          </h2>
          <p
            className="text-gray-700 leading-relaxed text-lg text-justify tracking-wide"
            dangerouslySetInnerHTML={{ __html: speech }}
          ></p>
        </div>
      </div>

      {/* ✅ Decorative Quote Icon */}
      <div className="absolute top-6 left-6 text-indigo-100 text-7xl font-serif select-none">
        ❝
      </div>
      <div className="absolute bottom-6 right-6 text-indigo-100 text-7xl font-serif select-none">
        ❞
      </div>
    </section>
  );
}
