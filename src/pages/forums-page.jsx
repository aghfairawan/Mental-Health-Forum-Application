import Forums from "../components/forum/forums";
import StatsCard from "../components/ui/stats-card";

export default function ForumsPage() {
  return (
    <div className="flex flex-col md:flex-row gap-2   ">
      <div className="w-3/4 md:overflow-y-scroll md:max-h-screen">
        <div className="mt-10 mb-5">
          <Forums />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <StatsCard />
          <div>
            <StatsCard />
          </div>
        </div>
      </div>
      <div className="w-1/4 md:max-h-screen md:scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300 overflow-y-scroll dark:scrollbar-thumb-blue-100 dark:scrollbar-track-gray-700">
        <div className="mt-10 mb-5">
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
