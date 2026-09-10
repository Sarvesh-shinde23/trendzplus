import { testimonials } from "@/lib/testimonial";
import { StarIcon } from "./Icons";


export default function Testimonials() {
  // Render the list twice so the track can loop seamlessly at -50%.
  const loopedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Customer Voices
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-navy-900">
          Loved by Local Families
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
          Real experiences from shoppers who visit Trendz Plus for all family occasions.
        </p>
      </div>

      {/* Fade edges so cards don't hard-cut at the viewport boundary */}
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="animate-marquee flex w-max gap-6 px-6">
          {loopedTestimonials.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[320px] shrink-0 rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm sm:w-[360px]"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <StarIcon key={starIdx} className="h-4 w-4" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}