"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent } from "@/lib/gtag";

type EventParams = Record<string, string | number | boolean | undefined>;

interface TrackEventLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  eventName: string;
  eventParams?: EventParams;
}

export const TrackEventLink = ({
  href,
  className,
  children,
  eventName,
  eventParams,
}: TrackEventLinkProps) => {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, eventParams)}
    >
      {children}
    </Link>
  );
};
