import events from "@/data/eventdata.json";
import { useMediaQuery } from "react-responsive";

const Details = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  return (
    <div className="flex flex-col flex-1/2 bg-black text-stone-300 text-sm tracking-wide">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-stone-800 p-2 font-light text-stone-400">
        <span>[CLIMBING TRIPS]</span>
      </div>

      {/* Event list */}
      <div className="flex flex-col">
        {events.map((event, index) => (
          <div
            key={index}
            className={`${
              isSmallScreen
                ? "flex justify-between items-center" // mobile layout
                : "grid grid-cols-[1.5fr_1fr_auto] items-center" // desktop layout
            } p-2 border-b border-stone-900/50 hover:bg-stone-900/40 transition`}
          >
            {/* Name */}
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-stone-500" />
              <span className="text-stone-300 font-extralight tracking-tighter">
                {event.name.toUpperCase()}
              </span>
            </div>

            {/* Type */}
            <span className="text-stone-300 text-xs font-thin">
              {event.type.toUpperCase()}
            </span>

            {/* Year (hidden on small screens) */}
            {!isSmallScreen && (
              <span className="text-stone-300 text-xs font-thin text-right">
                {event.date}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
