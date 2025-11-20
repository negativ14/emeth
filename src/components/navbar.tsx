"use client";
import Link from "next/link";
import Container from "./container";
import Logo from "./logo";
import { cn } from "@/src/lib/utils";
import { IconLayoutSidebar, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion, spring } from "motion/react";

const navLinks = [
  { title: "Features", href: "/features" },
  { title: "Product", href: "/product" },
  { title: "Socials", href: "/socials" },
  { title: "Pricing", href: "/pricing" },
];

export function Navbar() {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800 relative px-4">
      <DesktopNavbar />
      <MobileNavbar />
    </div>
  );
}

export function DesktopNavbar() {
  return (
    <Container className="items-center justify-between py-4 hidden md:flex">
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
  );
}

export function MobileNavbar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex items-center justify-between relative md:hidden">
      <Logo />
      <button className="p-1" onClick={() => setOpen(!open)}>
        <IconLayoutSidebar />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 h-full w-full z-50"
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                className="absolute right-1 top-1"
                onClick={() => setOpen(false)}
              >
                <IconX />
              </button>
            </div>

            <div className="flex flex-col gap-4 pt-10">
              {navLinks?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-xl text-neutral-600 dark:text-neutral-400 font-medium"
                  >
                    {item.title}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
