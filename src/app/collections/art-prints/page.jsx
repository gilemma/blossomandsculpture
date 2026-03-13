import GalleryGrid from "../../../components/GalleryGrid";
import { artworks } from "../../../data/artworks";

export default function ArtPrintsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <section className="border-b border-stone-200 pb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Collection</p>
            <h1 className="mt-3 font-serif text-4xl text-stone-800 md:text-5xl">Art Prints</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-stone-600">A curated gallery of prints using your current local artwork set.</p>
        </section>
        <GalleryGrid artworks={artworks} />
    </main>
  );
}

