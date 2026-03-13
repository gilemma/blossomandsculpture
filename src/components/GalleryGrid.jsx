import ArtworkCard from "./ArtworkCard";

export default function GalleryGrid({ artworks }) {
  return (
    <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {artworks.map((art) => (
        <ArtworkCard key={art.slug} art={art} />
      ))}
    </div>
  );
}