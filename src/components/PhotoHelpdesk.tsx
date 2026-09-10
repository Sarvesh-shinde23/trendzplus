"use client";

import { buildDirectWhatsAppUrl } from "@/lib/whatsapp";
import { CameraIcon, SendIcon } from "./Icons";

const DIRECT_MESSAGE =
  "Hi TrendzPlus! I'm looking for a specific size or clothing pattern/brand that I'm not sure is in stock. I'll send a photo/screenshot here — could someone check rack availability for me?";

export default function PhotoHelpdesk() {
  const whatsappUrl = buildDirectWhatsAppUrl(DIRECT_MESSAGE);

  return (
    <section className="w-full bg-[#0a1a0f] py-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black/40 text-green-400">
            <CameraIcon className="h-5 w-5" />
          </div>

          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-green-400">
              Direct Showroom Helpdesk
            </span>

            <h3 className="mt-0.5 text-base font-bold text-white sm:text-lg">
              Looking for a Specific Size or Pattern?
            </h3>

            <p className="mt-1 max-w-xl text-xs text-slate-300 sm:text-sm">
              Send us a photo or screenshot on WhatsApp. Our showroom floor
              staff checks rack inventory and confirms availability within
              10 minutes!
            </p>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#1fb959]"
        >
          <SendIcon className="h-4 w-4" />
          Send Photo on WhatsApp
        </a>
      </div>
    </section>
  );
}