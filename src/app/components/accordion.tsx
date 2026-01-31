"use client";

import { useState } from "react";

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div
      className={`rounded-lg p-5 transition-all duration-300 ${
        open
          ? "bg-white shadow-md border border-primary/20"
          : "bg-bg-light border border-transparent hover:border-primary/10"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-2 text-left"
      >
        <h3 className="text-lg font-bold text-text-dark">{title}</h3>
        <span
          className={`material-symbols-outlined transition-transform duration-300 text-text-dark ${
            open ? "rotate-180" : ""
          }`}
        >
          expand_more
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="text-sm leading-relaxed text-text-dark/70">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
