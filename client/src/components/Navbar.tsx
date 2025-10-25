import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import playinganimation from "@/assets/playinganimation.json";
import { useAtom } from "jotai";
import { songPlayingAtom } from "@/atom/GeneralAtom";

const Navbar = () => {
  const [time, setTime] = useState({ syd: "", mdn: "" });
  const [atomPlaying, setAtomPlaying] = useAtom<boolean>(songPlayingAtom);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const sydTime = now.toLocaleTimeString("en-AU", {
        timeZone: "Australia/Sydney",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      const mdnTime = now.toLocaleTimeString("en-AU", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      setTime({ syd: sydTime, mdn: mdnTime });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="top-0 left-0 w-full border-b-[0.5px] border-stone-800 bg-black text-stone-400 font-thin text-sm z-50 p-3.5 flex items-center justify-between">
      <span>A.E.</span>

      {/* Center section — SYD & MDN times with SVG in between */}
      <section className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 whitespace-nowrap">
        <div className="flex items-center justify-end min-w-[78px]">
          <span>SYD {time.syd}</span>
        </div>

        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-stone-400"
        >
          <path
            d="M2 5h2v2H2V5zm4 4H4V7h2v2zm2 0H6v2H4v2H2v6h20v-6h-2v-2h-2V9h2V7h2V5h-2v2h-2v2h-2V7H8v2zm0 0h8v2h2v2h2v4H4v-4h2v-2h2V9zm2 4H8v2h2v-2zm4 0h2v2h-2v-2z"
            fill="currentColor"
          />
        </svg>

        <div className="flex items-center justify-start min-w-[78px]">
          <span>MDN {time.mdn}</span>
        </div>
      </section>

      <section>
        <Lottie
          animationData={playinganimation}
          loop={atomPlaying}
          className="size-4 hover:cursor-pointer"
          onClick={() => setAtomPlaying(!atomPlaying)}
        />
      </section>
    </div>
  );
};

export default Navbar;
