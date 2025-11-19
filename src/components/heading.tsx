import { cn } from "@/src/lib/utils";
import React from "react";

export const Heading = ({
  children,
  className,
  as = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl tracking-tight font-space",
        className
      )}
    >
      {children}
    </Tag>
  );
};
