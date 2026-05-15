"use client";

import {Languages} from "lucide-react";
import {useLocale} from "next-intl";
import {createNavigation} from "next-intl/navigation";

const {useRouter, usePathname} = createNavigation();

export default function LangButton() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const nextLocale = locale === "pt" ? "en" : "pt";


  return (
    <button
      onClick={() => router.replace(pathname, { locale: nextLocale })}
      className="flex items-center gap-2"
    >
      <Languages size={18} />
      {locale.toUpperCase()}
    </button>
  );
}