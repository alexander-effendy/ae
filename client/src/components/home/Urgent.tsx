import linksdata from "@/data/linksdata.json";

const Urgent = () => {
  const getLink = (index: number) =>
    linksdata[index] || { label: "N/A", description: "", url: "#" };

  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className="w-full bg-black text-stone-200 soft-scrollbar-right p-2"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] auto-rows-[160px] gap-2">
        {/* 1–10 existing layout */}
        {/* 1 */}
        <a
          href={getLink(0).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 row-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px] tracking-widest">[{getLink(0).label}]</span>
          <p className="text-stone-400 text-[10px] mt-1 text-center px-2 leading-tight">
            {getLink(0).description}
          </p>
        </a>

        {/* 2 */}
        <a
          href={getLink(1).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(1).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(1).description}
          </p>
        </a>

        {/* 3 */}
        <a
          href={getLink(2).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 row-span-2 bg-stone-950 border border-stone-900 flex flex-col items-center justify-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(2).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(2).description}
          </p>
        </a>

        {/* 4 */}
        <a
          href={getLink(3).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(3).label}]</span>
          <p className="text-stone-400 text-[9px] text-center px-2 leading-tight">
            {getLink(3).description}
          </p>
        </a>

        {/* 5 */}
        <a
          href={getLink(4).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(4).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(4).description}
          </p>
        </a>

        {/* 6 */}
        <a
          href={getLink(5).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 row-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(5).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(5).description}
          </p>
        </a>

        {/* 7 */}
        <a
          href={getLink(6).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(6).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(6).description}
          </p>
        </a>

        {/* 8 */}
        <a
          href={getLink(7).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(7).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(7).description}
          </p>
        </a>

        {/* 9 */}
        <a
          href={getLink(8).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(8).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(8).description}
          </p>
        </a>

        {/* 10 */}
        <a
          href={getLink(9).url}
          target="_blank"
          rel="noopener noreferrer"
          className="row-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition-colors"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(9).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(9).description}
          </p>
        </a>

        {/* Continue 11–20 */}
        {/* 11 */}
        <a
          href={getLink(10).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-stone-950 border border-stone-900 flex justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px]">[{getLink(10).label}] — {getLink(10).description}</p>
        </a>

        {/* 12 */}
        <a
          href={getLink(11).url}
          target="_blank"
          rel="noopener noreferrer"
          className="row-span-2 bg-stone-950 border border-stone-900 flex flex-col items-center justify-center hover:bg-stone-900 transition"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(11).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center">{getLink(11).description}</p>
        </a>

        {/* 13 */}
        <a
          href={getLink(12).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex flex-col items-center justify-center hover:bg-stone-900 transition"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(12).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center">{getLink(12).description}</p>
        </a>

        {/* 14 */}
        <a
          href={getLink(13).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-stone-950 border border-stone-900 flex items-center justify-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px] text-center px-2 leading-tight">
            [{getLink(13).label}] — {getLink(13).description}
          </p>
        </a>

        {/* 15 */}
        <a
          href={getLink(14).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-3 bg-stone-950 border border-stone-900 flex justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px] text-center px-2 leading-tight">
            [{getLink(14).label}] — {getLink(14).description}
          </p>
        </a>

        {/* 16 */}
        <a
          href={getLink(15).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-500 text-[10px]">[{getLink(15).label}]</p>
          <p className="text-stone-400 text-[9px] text-center px-2 leading-tight">{getLink(15).description}</p>
        </a>

        {/* 17 */}
        <a
          href={getLink(16).url}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 bg-stone-950 border border-stone-900 flex justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px] text-center px-2 leading-tight">
            [{getLink(16).label}] — {getLink(16).description}
          </p>
        </a>

        {/* 18 */}
        <a
          href={getLink(17).url}
          target="_blank"
          rel="noopener noreferrer"
          className="row-span-2 bg-stone-950 border border-stone-900 flex flex-col justify-center items-center hover:bg-stone-900 transition"
        >
          <span className="text-stone-500 text-[10px]">[{getLink(17).label}]</span>
          <p className="text-stone-400 text-[9px] mt-1 text-center px-2 leading-tight">
            {getLink(17).description}
          </p>
        </a>

        {/* 19 */}
        <a
          href={getLink(18).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px] text-center px-2 leading-tight">
            [{getLink(18).label}] — {getLink(18).description}
          </p>
        </a>

        {/* 20 */}
        <a
          href={getLink(19).url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-stone-950 border border-stone-900 flex justify-center items-center hover:bg-stone-900 transition"
        >
          <p className="text-stone-400 text-[10px] text-center px-2 leading-tight">
            [{getLink(19).label}] — {getLink(19).description}
          </p>
        </a>
      </div>
    </div>
  );
};

export default Urgent;
