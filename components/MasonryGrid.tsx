import Image from 'next/image';

const mockData = [
  { id: 1, src: '/images/recycle1.jpg', alt: 'Recycler' },
  { id: 2, src: '/images/repair.jpg', alt: 'Réparer' },
  { id: 3, src: '/images/reuse.jpg', alt: 'Réutiliser' },
  // Ajoutez d'autres éléments selon vos besoins
];

export default function MasonryGrid() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
      {mockData.map((item) => (
        <div key={item.id} className="break-inside-avoid overflow-hidden rounded-lg shadow-md">
          <Image
            src={item.src}
            alt={item.alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover"
          />
          <div className="p-4 bg-white">
            <h2 className="text-xl font-semibold">{item.alt}</h2>
            <p className="text-gray-600">Description de l'action {item.alt.toLowerCase()}.</p>
          </div>
        </div>
      ))}
    </div>
  );
}
