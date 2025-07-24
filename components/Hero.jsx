export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[250px] text-center text-white flex flex-col justify-center shadow-2xl p-7"
       
    >
      <div className="bg-[whitesmoke] text-[lightseagreen] bg-opacity-50 absolute inset-0 shadow-lg rounded-2xl "></div>
      <div className="relative z-10">
        <h1 className="text-2xl text-[darkcyan] pt-2 font-extrabold drop-shadow-lg leading-snug">জ্ঞান যেখানে সীমাবদ্ধ, বুদ্ধি সেখানে আড়ষ্ট, মুক্তি সেখানে অসম্ভব”</h1>
        <p className="mt-2 text-2xl text-[lightseagreen]">আমাদের বিদ্যালয়ে আপনাকে স্বাগতম🌸</p>
        <button className="mt-4 bg-[indigo] text-2xl text-[whitesmoke] px-5 py-2 rounded shadow-lg
         hover:bg-[darkcyan] hover:text-white">
          ভর্তি চলছে – এখনই আবেদন করুন
        </button>
      </div>
    </section>
  );
}


 
