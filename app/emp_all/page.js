"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("/api/employees");
        const data = await res.json();
        if (data.success) {
          setEmployees(data.employees);
        }
      } catch (err) {
        console.error("Failed to load employees", err);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-center text-indigo-700 mb-8 border-b-2 border-indigo-200 pb-3">
          👩‍🏫 কর্মকর্তা ও কর্মচারীর তালিকা
        </h1>

        {employees.length === 0 ? (
          <p className="text-center text-gray-500">কোনো তথ্য পাওয়া যায়নি।</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.map((emp) => (
              <div
                key={emp.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg p-6 text-center transition-shadow"
              >
                {emp.imageUrl && (
                  <div className="flex justify-center mb-4">
                    <Image
                      src={emp.imageUrl}
                      alt={emp.name}
                      width={120}
                      height={120}
                      className="rounded-full shadow-md border-4 border-indigo-200"
                    />
                  </div>
                )}
                <h2 className="text-lg font-bold text-indigo-700">{emp.name}</h2>
                <p className="text-gray-600 mt-1">
                 {emp.designation}
                </p>
                {emp.mobile && (
                  <p className="text-gray-500 text-sm mt-2">📞 {emp.mobile}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
