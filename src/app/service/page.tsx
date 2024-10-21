import HowService from "@/component/services/howService"
import WhatService from "@/component/services/whatService"
// import OurCustomer from "@/component/services/ourCustomer"
import Testimonial from "@/component/testimonial";

export default function Home() {
  return (
    <main className="h-full py-8">
      <HowService />
      <WhatService />
      {/* <OurCustomer /> */}
      <Testimonial />
    </main>
  );
}