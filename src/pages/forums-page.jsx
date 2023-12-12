import Forums from "../components/forum/forums";
import StatsCard from "../components/ui/stats-card";

export default function ForumsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-2   ">
      <div className="md:w-3/4 md:max-h-screen md:scrollbar-thin scrollbar-thumb-light-navy scrollbar-track-blue-300 overflow-y-scroll">
        <div className="mt-5 mb-5">
          <Forums />


  
        </div>
      </div>
      <div className="md:w-1/4 md:max-h-screen md:scrollbar-thin scrollbar-thumb-light-navy scrollbar-track-blue-300 overflow-y-scroll">
        <div className="mt-5 mb-5">
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
    </div>
  );
}
