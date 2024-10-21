import Team from "@/component/team/team"
import Join from "@/component/team/join"

export default function Home() {
  return (
    <main className="h-full py-8">
      <Team />
      <Join />
    </main>
  );
}