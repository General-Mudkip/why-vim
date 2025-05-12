import { IntroSection } from "@/components/sections/01-intro/01-intro";
import { HJKLSection } from "@/components/sections/02-hjkl/02-hjkl";

export default function Home() {
  return (
    <main className="px-24 flex flex-col">
      <IntroSection />
      <HJKLSection />
    </main>
  );
}
