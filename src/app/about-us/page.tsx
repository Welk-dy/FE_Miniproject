import History from "@/component/about/history"
import VisionMission from "@/component/about/visionMission"
import Team from "@/component/team/team"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and mission.",
};

export default function Home() {
  return (
    <main className="h-full py-8">
      <History />
      <VisionMission />
      <Team />
    </main>
  );
}