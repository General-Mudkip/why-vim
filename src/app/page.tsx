import { HeroSection } from "@/components/sections/01-hero/01-hero";
import { HJKLSection } from "@/components/sections/02-hjkl/02-hjkl";

export default function Home() {
  return (
    <main className="px-24 flex flex-col">
      <HeroSection />
      <HJKLSection />
    </main>
  );
}
