import { Button } from "@/src/components/ui/button";
import Container from "./container";
import { Heading } from "./heading";
import { SubHeading } from "./subHeading";
import Link from "next/link";
import LandingImages from "./landingImages";

export default function Hero() {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1" className="text-start">
          Agents that do the work <br /> Approvals that keep you safe.
        </Heading>
        <SubHeading className="py-4 text-left">
          Display AI agents that plan, act through your tools and report
          outcomes-without changing how your team works
        </SubHeading>
        <div className="flex items-center gap-6 py-6">
          <Button className="shadow-brand">Start your free trail</Button>
          <Button variant={"outline"} asChild>
            <Link href={"#"}>View role based demo</Link>
          </Button>
        </div>

        <LandingImages />
      </Container>
    </div>
  );
}
