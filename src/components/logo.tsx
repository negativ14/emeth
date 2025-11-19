import { cn } from "@/src/lib/utils";
import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href={"/"}
      className={cn(
        "flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-medium font-space tracking-tighter bg-clip-text text-transparent",
        "dark:bg-linear-to-br dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-600",
        "bg-linear-to-br from-neutral-400 via-neutral-600 to-neutral-900",
        className
      )}
    >
      emeth
    </Link>
  );
}
