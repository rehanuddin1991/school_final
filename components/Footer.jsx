"use client";
import { useEffect, useState } from "react";

export default function Footer() {
    const [SchoolName, setSchoolName] = useState(""); // ✅ শুরুতে স্ট্রিং
    
      useEffect(() => {
        const fetchSchoolName = async () => {
          try {
            const res = await fetch("/api/office_settings");
            const data = await res.json();
            if (data.success && data.settings.length > 0) {
              setSchoolName(data.settings[0].school_name || ""); // ✅ প্রথম রেকর্ডের SchoolName নিচ্ছে
            }
          } catch (err) {
            console.error("Failed to load SchoolName info", err);
          }
        };
        fetchSchoolName();
      }, []);
  return (
    <footer className="bg-blue-800 text-white p-6 text-center mt-6">
      <p>Copyright © 2025 | {SchoolName}</p>
      
    </footer>
  );
}
