import { PieChart } from "lucide-react";

export default function StatsCard() {
  return (
    <div className="my-2 cursor-pointer overflow-hidden relative transition-all duration-500 hover:translate-y-2  h-44 bg-neutral-50 rounded-lg shadow-xl flex flex-row items-center justify-evenly gap-2 p-2 before:absolute before:w-full hover:before:top-0 before:duration-500 before:-top-1 before:h-1 before:bg-purple-200">
      <div>
        <div className="flex">
          <PieChart />
          <span className="font-bold">Card title</span>
        </div>
        <p className="line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>
    </div>
  );
}
