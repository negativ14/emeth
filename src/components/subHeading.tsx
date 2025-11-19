import { cn } from "@/src/lib/utils";
import React from "react";

export const SubHeading = ({
  children,
  className,
  as = "p",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-base md:text-lg font-inter text-neutral-400 dark:text-neutral-600 max-w-2xl",
        className
      )}
    >
      {children}
    </Tag>
  );
};
