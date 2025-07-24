export default function Gallery() {
  const images = ["/images/g1.jpg", "/images/g2.webp", "/images/g3.jpg", "/images/g4.jpg"];
  return (
    <section className="p-6 bg-gray-50">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">📸 ফটো গ্যালারি</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <img key={i} src={img} className="rounded border-b-indigo-500 shadow-lg hover:scale-105 transition" />
        ))}
      </div>
    </section>
  );
}
