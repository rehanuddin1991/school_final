"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [SchoolName, setSchoolName] = useState("");
  const [isStudentMenuOpen, setIsStudentMenuOpen] = useState(false); // ✅ Student Menu Toggle

  useEffect(() => {
    const fetchSchoolName = async () => {
      try {
        const res = await fetch("/api/office_settings");
        const data = await res.json();
        if (data.success && data.settings.length > 0) {
          setSchoolName(data.settings[0].school_name || "");
        }
      } catch (err) {
        console.error("Failed to load SchoolName info", err);
      }
    };
    fetchSchoolName();
  }, []);

  return (
    <header className="bg-[cadetblue] text-white flex justify-between items-center px-4 py-6 rounded-b-2xl shadow-[0_4px_15px_rgba(0,0,0,0.2)]">
      {/* ✅ Logo & Title */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md border-2 border-white"
          />
        </Link>
        <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-sm">
          {SchoolName}
        </h1>
      </div>

      {/* ✅ Navigation Menu */}
      <nav className="space-x-5 flex items-center relative">
        <Link href="/" className="hover:text-yellow-300 transition-colors duration-300">
          হোম
        </Link>

        <Link href="/speech" className="hover:text-yellow-300 transition-colors duration-300">
          বাণী
        </Link>


        <Link href="/about" className="hover:text-yellow-300 transition-colors duration-300">
          আমাদের সম্পর্কে
        </Link>
        <Link href="/news" className="hover:text-yellow-300 transition-colors duration-300">
          নোটিশ
        </Link>
        <Link href="/contact" className="hover:text-yellow-300 transition-colors duration-300">
          যোগাযোগ
        </Link>
        <Link href="/emp_all" className="hover:text-yellow-300 transition-colors duration-300">
          কর্মকর্তা/কর্মচারী
        </Link>

        
   


        <Link
          href="/secure-lgn"
          className="bg-yellow-400 text-black px-4 py-1.5 rounded-lg shadow-md hover:bg-yellow-300 transition-all duration-300"
        >
          লগইন
        </Link>
        <Link
          href="/register"
          className="bg-green-400 text-black px-4 py-1.5 rounded-lg shadow-md hover:bg-green-300 transition-all duration-300"
        >
          রেজিস্টার
        </Link>
      </nav>
    </header>
  );
}
