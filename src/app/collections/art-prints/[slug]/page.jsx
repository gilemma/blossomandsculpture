import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AddToCartButton from "../../../../components/AddToCartButton";
import ArtworkCard from "../../../../components/ArtworkCard";
import { artworks } from "../../../../data/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default async function ArtworkDetailPage({ params }) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) {
    notFound();
  }

  const relatedArtworks = artworks.filter((item) => item.slug !== artwork.slug).slice(0, 4);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <nav className="text-xs uppercase tracking-[0.22em] text-stone-500">
        <Link href="/collections/art-prints" className="transition hover:text-stone-800">
          Collection
        </Link>
        <span className="px-2">/</span>
        <span>{artwork.title}</span>
      </nav>

      <section className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-start">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
          <Image src={artwork.image} alt={artwork.title} fill className="object-cover" priority />
        </div>

        <div className="lg:pt-6">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Art Print</p>
          <h1 className="mt-3 font-serif text-4xl text-stone-800 md:text-5xl">{artwork.title}</h1>
          <p className="mt-4 text-2xl text-stone-700">${artwork.price}</p>
          <p className="mt-6 max-w-xl text-sm leading-7 text-stone-600">{artwork.description}</p>

          <div className="mt-8 grid gap-4 border-y border-stone-200 py-6 text-sm text-stone-600 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Format</p>
              <p className="mt-2">Fine art print on archival stock</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Shipping</p>
              <p className="mt-2">Free shipping for orders over $50</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Edition</p>
              <p className="mt-2">Limited release from the current collection</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Packaging</p>
              <p className="mt-2">Carefully wrapped with envelope included</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AddToCartButton slug={artwork.slug} />
            <Link
              href="/cart"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-stone-300 px-6 text-sm uppercase tracking-[0.16em] text-stone-700 transition hover:bg-stone-100"
            >
              View cart
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-stone-200 pt-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-stone-500">You may also like</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-800">More from the collection</h2>
          </div>
          <Link href="/collections/art-prints" className="text-sm uppercase tracking-[0.16em] text-stone-500 transition hover:text-stone-800">
            Back to all prints
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
          {relatedArtworks.map((relatedArtwork) => (
            <ArtworkCard key={relatedArtwork.slug} art={relatedArtwork} />
          ))}
        </div>
      </section>
    </main>
  );
}