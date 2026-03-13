export default function ArtworkCard({ art }) {
  return (
    <div className="group cursor-pointer">

      <div className="overflow-hidden rounded-lg">
        <img
          src={art.image}
          className="w-full transition-transform group-hover:scale-105"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium">{art.title}</h3>
        <p className="text-gray-600 text-sm">${art.price}</p>
      </div>

    </div>
  );
}