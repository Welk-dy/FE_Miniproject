import History from "@/component/about/history"
import VisionMission from "@/component/about/visionMission"
import Team from "@/component/team/team"

export default function Home() {
  return (
    <main className="h-full py-8">
      <History />
      <VisionMission />
      <Team />
    </main>
  );
}