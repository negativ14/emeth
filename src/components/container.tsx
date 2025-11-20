import { cn } from "@/src/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("max-w-7xl mx-auto px-4 overflow-hiddend", className)}>{children}</div>;
}
