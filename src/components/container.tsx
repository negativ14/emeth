import { cn } from "@/src/lib/utils";
import React from "react";

export default function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>;
}
