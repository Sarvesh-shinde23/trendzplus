import Image from "next/image";

interface TrendPhoto {
  src: string;
  alt: string;
  // Relative width share within the row — matches the varied crop widths in the design
  span: "narrow" | "wide";
}

const trendPhotos: TrendPhoto[] = [

  { src: "/instagram/Gallery2.png", alt: "Woman in red embroidered anarkali", span: "wide" },
  { src: "/instagram/Gallery3.png", alt: "Family shopping together in-store", span: "wide" },
  { src: "/instagram/Gallery4.png", alt: "Girl in floral dress twirling outdoors", span: "wide" },
  { src: "/instagram/Gallery5.png", alt: "Men's formal outfit flatlay with blazer and shoes", span: "wide" },
  { src: "/instagram/Gallery6.png", alt: "Bride in traditional red bridal wear", span: "wide" },
];

export default function FollowTheTrend() {
  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-rose-600">
          Community &amp; Style
        </p>

        <h2 className="mt-3 font-serif text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Follow the Trend
        </h2>
<p className="mt-3 text-sm text-slate-500">
  <a
    href="https://www.instagram.com/trendz_plus?stkn=OWFqd3l0Y3hlZ3Nr"
    target="_blank"
    rel="noopener noreferrer"
    className="font-medium text-slate-700 transition-colors hover:text-rose-600"
  >
    @trendz_plus
  </a>{" "}
  • Tag #TrendzPlusFamily to be featured in our flagships
</p>

        <div className="mt-10 flex gap-3 overflow-x-auto pb-2 sm:justify-center sm:overflow-visible">
          {trendPhotos.map((photo, index) => (
            <div
              key={photo.src}
              className={`relative aspect-[3/4] shrink-0 overflow-hidden rounded-lg ${
                photo.span === "narrow" ? "w-24 sm:w-28" : "w-44 sm:w-48"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 40vw, 200px"
                className="object-cover"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}