"use client";

import { useEffect, useState } from "react";

export default function ContactPage() {
  const [contact, setContact] = useState(""); // ✅ শুরুতে স্ট্রিং
  const [email, setEmail] = useState(""); // ✅ শুরুতে স্ট্রিং
  const [website, setwebsite]=useState(""); // ✅ শুরুতে স্ট্রিং

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await fetch("/api/office_settings");
        const data = await res.json();
        if (data.success && data.settings.length > 0) {
          setContact(data.settings[0].contact || ""); // ✅ প্রথম রেকর্ডের contact নিচ্ছে
          setwebsite(data.settings[0].website || ""); // ✅ প্রথম রেকর্ডের contact নিচ্ছে
          setEmail(data.settings[0].email || ""); // ✅ প্রথম রেকর্ডের contact নিচ্ছে
        }
      } catch (err) {
        console.error("Failed to load contact info", err);
      }
    };
    fetchContact();
  }, []);

  return (
    <main className="p-14 bg-gray-50 min-h-screen text-[darkcyan]">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold   mb-6 text-center">
          📞 যোগাযোগ করুন
        </h1>

        {/* ✅ Contact Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-indigo-50 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-[darkcyan] mb-2">
              আমাদের ঠিকানা
            </h2>
            <p
              className="text-[darkcyan]"
              dangerouslySetInnerHTML={{ __html: contact }}
            ></p>
            <p
              className="text-[darkcyan]"
              dangerouslySetInnerHTML={{ __html: email }}
            ></p>

            <p
              className="text-[darkcyan]"
              dangerouslySetInnerHTML={{ __html: website }}
            ></p>
          </div>

          {/* ✅ Google Map Embed (optional) */}
          <iframe
            className="w-full h-56 rounded-xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8437984507!2d90.391350814296!3d23.750866894608716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8a674f0bb01%3A0xf78aeaba7c2b64cf!2sDhaka!5e0!3m2!1sen!2sbd!4v1629727437269!5m2!1sen!2sbd"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* ✅ Contact Form */}
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="আপনার নাম"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="আপনার ইমেইল"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            placeholder="আপনার বার্তা লিখুন..."
            rows="4"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 shadow-md"
          >
            পাঠিয়ে দিন
          </button>
        </form>
      </div>
    </main>
  );
}
