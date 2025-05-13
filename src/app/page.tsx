import { SectionLabel } from "@/components/common/section-label";
import { SectionProvider } from "@/components/contexts/SectionContext";
import { IntroSection } from "@/components/sections/01-intro/01-intro";
import { HJKLSection } from "@/components/sections/02-hjkl/02-hjkl";
import { TimeGame } from "@/components/sections/03-time-game/03-time-game";

export default function Home() {
  return (
    <SectionProvider>
      <SectionLabel />
      <main className="px-24 flex flex-col">
        <IntroSection />
        <HJKLSection />
        <TimeGame />
      </main>
    </SectionProvider>
  );
}
