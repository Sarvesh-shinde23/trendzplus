import { BoxIcon, TagIcon, TrialIcon, ExchangeIcon } from "./Icons";


interface Feature {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  iconBg: string;
  iconColor: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: BoxIcon,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Huge Variety (10,000+)",
    description:
      "Fresh designs and collections replenished weekly directly from top clothing mills and national brand houses.",
  },
  {
    icon: TagIcon,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    title: "Best Family Pricing",
    description:
      "No middlemen markups. Direct brand bulk sourcing guarantees genuine value, festive combos, and pocket-friendly price points.",
  },
  {
    icon: TrialIcon,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    title: "Try & Buy in Person",
    description:
      "Air-conditioned spacious trial rooms, dedicated assistants, and free immediate alteration tailors ready at each store.",
  },
  {
    icon: ExchangeIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "7-Day Easy Exchange",
    description:
      "Bought the wrong fit for your kid? Simply bring the unworn garment with bill to any of our 8 branches for hassle-free swap.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-indigo-50/60 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Family Shopping Experience
        </span>
        <h2 className="mt-2 text-3xl font-extrabold text-navy-900">
          Why Families Choose Trendz Plus
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
          We combine showroom comfort and multi-brand quality with market-best family
          pricing.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-white p-6 text-left shadow-sm transition hover:shadow-md"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg}`}>
                <f.icon className={`h-5 w-5 ${f.iconColor}`} />
              </div>
              <h3 className="mt-4 text-sm font-bold text-navy-900">{f.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}