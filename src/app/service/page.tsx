import HowService from "@/component/services/howService"
import WhatService from "@/component/services/whatService"

export default function Home() {
  return (
    <main className="h-full py-8">
      <HowService />
      <WhatService />
    </main>
  );
}