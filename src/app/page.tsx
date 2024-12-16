import Hero from "@/component/details/hero";
import AllEvent from "@/component/event/allEvent";
import Popular from "@/component/event/popular";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <Popular />
      <AllEvent />
    </main>
  );
}