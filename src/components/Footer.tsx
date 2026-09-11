import { siteConfig } from "@/lib/siteConfig";
import {
  ClockIcon,
  PhoneIcon,
  MailIcon,
  CompassIcon,
  BadgeCheckIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="w-full bg-indigo-50/60 pt-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand / Contact */}
        <div>
          <h3 className="text-base font-extrabold text-navy-900">
            {siteConfig.name}
          </h3>

          <p className="mt-3 text-xs leading-relaxed text-slate-500">
            Trendz Plus brings fashion for the entire family under one roof,
            with dedicated collections for men, women, kids, and ethnic wear.
          </p>

          <div className="mt-4 space-y-2 text-xs text-slate-500">
            <p className="flex items-center gap-2">
              <ClockIcon className="h-3.5 w-3.5" />
              Open All 7 Days: 10:00 AM – 9:30 PM
            </p>

            <p className="flex items-center gap-2">
              <PhoneIcon className="h-3.5 w-3.5" />
              Care: {siteConfig.supportPhoneDisplay}
            </p>

            <p className="flex items-center gap-2">
              <MailIcon className="h-3.5 w-3.5" />
              {siteConfig.supportEmail}
            </p>
          </div>
        </div>

        {/* Showrooms */}
        <div>
          <h4 className="text-sm font-bold text-navy-900">
            Our Showrooms
          </h4>

          <ul className="mt-3 space-y-2 text-xs text-slate-500">
            <li>
              <span className="font-semibold text-slate-700">
                Trendz Plus - Kids:
              </span>{" "}
              Sector 35, Kamothe, Navi Mumbai
            </li>

            <li>
              <span className="font-semibold text-slate-700">
                Trendz Plus Mens Wear:
              </span>{" "}
              Sector 35, Kamothe, Navi Mumbai
            </li>

            <li>
              <span className="font-semibold text-slate-700">
                Trendz Plus NX:
              </span>{" "}
              Sector 35, Kamothe, Navi Mumbai
            </li>

            <li>
              <span className="font-semibold text-slate-700">
                Trendz Plus - Ethnic:
              </span>{" "}
              Sector 35, Kamothe, Navi Mumbai
            </li>

            <li>
              <span className="font-semibold text-slate-700">
                The Family Showroom:
              </span>{" "}
              Seorahi, Kushinagar, Uttar Pradesh
            </li>
          </ul>

          <a
            href="#store-locator"
            className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-navy-900 hover:underline"
          >
            <CompassIcon className="h-3.5 w-3.5" />
            Find Nearest Branch &amp; Directions
          </a>
        </div>

        {/* Departments */}
        <div>
          <h4 className="text-sm font-bold text-navy-900">
            Departments
          </h4>

          <ul className="mt-3 space-y-2 text-xs text-slate-500">
            <li>Men&apos;s Wear</li>
            <li>Women&apos;s / Ladies Wear</li>
            <li>Kids Wear</li>
            <li>Ethnic Wear</li>
            <li>Family Fashion Collections</li>
          </ul>
        </div>

        {/* Promise */}
        <div>
          <h4 className="text-sm font-bold text-navy-900">
            Why Shop at Trendz Plus?
          </h4>

          <div className="mt-3 rounded-xl bg-white p-4 shadow-sm">
            <p className="text-sm font-bold text-navy-900">
              Fashion for the Whole Family
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              Explore dedicated collections for men, women, kids, and ethnic
              wear across our Trendz Plus showrooms.
            </p>
          </div>

          <p className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
            <BadgeCheckIcon className="h-3.5 w-3.5" />
            Quality Fashion &amp; Family Shopping
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>

          
        </div>
      </div>
    </footer>
  );
}