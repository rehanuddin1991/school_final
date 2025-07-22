export default function Notice() {
  const notices = [
    { title: "ভর্তি বিজ্ঞপ্তি প্রকাশিত হয়েছে", date: "২২ জুলাই ২০২৫" },
    { title: "বার্ষিক ক্রীড়া প্রতিযোগিতা", date: "১৫ আগস্ট ২০২৫" },
    { title: "পাঠ্যবই বিতরণ অনুষ্ঠান", date: "১ সেপ্টেম্বর ২০২৫" },
  ];

  return (
    <section className="p-8 bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl shadow-md max-w-4xl mx-auto mt-6">
      <h2 className="text-3xl font-extrabold text-blue-800 mb-6 flex items-center gap-2">
        📢 <span>সর্বশেষ নোটিশ</span>
      </h2>

      <ul className="space-y-4">
        {notices.map((n, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-white border border-blue-100 rounded-lg p-4 shadow-sm 
              hover:shadow-md hover:scale-[1.01] hover:bg-blue-50 transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl">🔔</span>
              <strong className="text-gray-800 text-lg">{n.title}</strong>
            </div>
            <span className="text-sm text-gray-500 italic">📅 {n.date}</span>
          </li>
        ))}
      </ul>

      <div className="text-right mt-4">
        <button className="text-blue-700 text-sm font-medium hover:underline">
          👉 সব নোটিশ দেখুন
        </button>
      </div>
    </section>
  );
}
