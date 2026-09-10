import { SnowflakeIcon, ScissorsIcon, CardIcon } from "./Icons";

const badges = [
  {
    icon: SnowflakeIcon,
    title: "100% AC Showrooms",
    description: "Comfortable all season shopping",
  },
  {
    icon: ScissorsIcon,
    title: "Free In-Store Alterations",
    description: "Quick hem & sleeve fitting",
  },
  {
    icon: CardIcon,
    title: "All Payment Modes",
    description: "UPI, Cards, EMI & Cash",
  },
];

export default function TrustBadges() {
  return (
    <section className="w-full  py-10 mb-12">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 text-center sm:grid-cols-3">
        {badges.map((b) => (
          <div key={b.title} className="flex flex-col items-center">
            <b.icon className="h-6 w-6 text-navy-900" />
            <p className="mt-2 text-sm font-bold text-navy-900">{b.title}</p>
            <p className="mt-0.5 text-xs text-slate-500">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}