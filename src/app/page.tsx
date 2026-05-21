import Hero from "@/components/Hero";
import RecentDepartures from "@/components/RecentDepartures";

function page() {
  return (
    <div className="flex-1 flex flex-col">
      <Hero />
      <RecentDepartures />
    </div>
  );
}

export default page;
