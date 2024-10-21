import Team from "@/component/team/team"
import Join from "@/component/team/join"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Learn more about our team.",
};

export default function Home() {
  return (
    <main className="h-full py-8">
      <Team />
      <Join />
    </main>
  );
}