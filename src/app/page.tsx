import Hero from "../components/hero";
import { ModeToggle } from "../components/theme-toggle";

export default function Home() {
  return (
    <div className="font-space text-center py-10 text-4xl font-medium uppercase">
      <ModeToggle />
      <Hero />
    </div>
  );
}
