import { useCallback, useEffect, useState } from "react";
import Forums from "../components/forum/forums";
import StatsCard from "../components/ui/stats-card";
import { getAllForums } from "../api/forum-api";

export default function ForumsPage() {
  const [loading, setLoading] = useState(false);
  const [forums, setForums] = useState([]);

  const fetchForums = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllForums();
      setForums(data.forums);
    } catch (error) {
      console.error("Failed to fetch forums:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchForums();
  }, [fetchForums]);

  return (
    <div className="flex flex-col md:flex-row gap-2 ">
      <div className="md:w-3/4 md:max-h-screen md:scrollbar-thin scrollbar-thumb-light-navy scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full pr-1">
        <div className="mt-5 mb-5">
          <Forums grabForums={forums} grabLoadingState={loading} />
        </div>
        <div className="mt-5 mb-5">
          <Forums grabForums={forums} grabLoadingState={loading} />
        </div>
      </div>
      <div className="md:w-1/4 md:max-h-screen md:scrollbar-thin scrollbar-thumb-light-navy scrollbar-track-blue-300 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full px-1">
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
