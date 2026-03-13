import ArtworkCard from "./ArtworkCard";

export default function GalleryGrid({ artworks }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {artworks.map((art) => (
        <ArtworkCard key={art.slug} art={art} />
      ))}
    </div>
  );
}