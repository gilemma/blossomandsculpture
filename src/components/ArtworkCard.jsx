import Image from "next/image";
import Link from "next/link";


export default function ArtworkCard({ art }) {
  return (
    <Link href={`/collections/art-prints/${art.slug}`} className="group block cursor-pointer">

      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <Image
          src={art.image}
          alt={art.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="text-sm font-medium tracking-[0.03em] text-stone-800">{art.title}</h3>
        <p className="mt-1 text-sm text-stone-500">${art.price}</p>
      </div>

    </Link>
  );
}