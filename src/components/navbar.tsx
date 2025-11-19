import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const navLinks = [
    { title: "Features", href: "/features" },
    { title: "Product", href: "/product" },
    { title: "Socials", href: "/socials" },
    { title: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <Container className="flex items-center justify-between py-4">
        <Logo />

        <div className="flex items-center gap-4">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-muted-foreground font-medium hover:text-foreground transition-colors duration-300 ease-in-out"
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={"/login"} className="text-sm text-foreground font-medium">
            Login
          </Link>
          <Link
            href={"/signup"}
            className={cn(
              "text-sm text-background font-medium rounded-md py-2 px-4 cursor-pointer",
              "dark:bg-linear-to-br dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-500",
              "bg-linear-to-br from-neutral-400 via-neutral-600 to-neutral-900",
              "hover:opacity-90 hover:shadow-sm",
              "transition-colors duration-300 ease-in-out"
            )}
          >
            Signup
          </Link>
        </div>
      </Container>
    </div>
  );
}
