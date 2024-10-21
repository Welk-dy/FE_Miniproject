import HowService from "@/component/services/howService"
import WhatService from "@/component/services/whatService"
import Testimony from "@/component/testimony"

export default function Home() {
  return (
    <main className="h-full py-8">
      <HowService />
      <WhatService />
      <Testimony />
    </main>
  );
}