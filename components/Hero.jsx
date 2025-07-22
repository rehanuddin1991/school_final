export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[350px] text-center text-white flex flex-col justify-center shadow-2xl p-7"
       
    >
      <div className="bg-[darkslategray] bg-opacity-50 absolute inset-0 shadow-md "></div>
      <div className="relative z-10">
        <h1 className="text-4xl pt-2 font-extrabold drop-shadow-lg leading-snug">জ্ঞান যেখানে সীমাবদ্ধ, বুদ্ধি সেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব”</h1>
        <p className="mt-2 text-2xl text-[lightblue]">আমাদের বিদ্যালয়ে আপনাকে স্বাগতম🌸</p>
        <button className="mt-4 bg-[lightyellow] text-2xl text-black px-5 py-2 rounded shadow-lg hover:bg-yellow-300">
          ভর্তি চলছে – এখনই আবেদন করুন
        </button>
      </div>
    </section>
  );
}


 
