import { investmentCalculatorOnAtom } from "@/atom/GeneralAtom";
import assetdata from "@/data/assetdata.json";
import { useAtom } from "jotai";
import { useMediaQuery } from "react-responsive";
import { Button } from "../ui/button";
import GraphInvestmentCalculator from "./money/GraphInvestmentCalculator";
import GraphAssets from "./money/GraphAssets";

const Money = () => {
  return (
    <>
      <Details />
      <Graph />
    </>
  );
};

const Graph = () => {
  const [ICO] = useAtom<boolean>(investmentCalculatorOnAtom);
  return (
    <div className="flex flex-1 border-l-[1px] border-stone-800">
      {ICO ? <GraphInvestmentCalculator /> : <GraphAssets />}
    </div>
  );
};

const Details = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });
  const [ICO, setICO] = useAtom<boolean>(investmentCalculatorOnAtom);

  const handleChangeICO = () => {
    setICO(!ICO)
  }

  return (
    <div className="flex flex-col flex-[0.25] min-w-[250px] bg-black text-stone-300 text-xs tracking-wide">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-stone-800 p-2 font-light text-stone-400">
        <span>[ASSET DETAILS]</span>
        <Button onClick={handleChangeICO} className="size-6 p-1 bg-stone-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M22 4v16h-6V4h6Zm-2 2h-2v12h2V6Zm-5 4v10H9V10h6Zm-2 8v-6h-2v6h2Zm-5-4v6H2v-6h6Zm-2 4v-2H4v2h2Z" /> </svg>
        </Button>
      </div>
      
      {/* Asset list */}
      <div className="flex flex-col">
        {assetdata.map((asset, index) => (
          <div
            key={index}
            className={`${isSmallScreen
              ? "flex justify-between items-center"
              : "grid grid-cols-[1.5fr_auto] items-center"
              } p-2 border-b border-stone-800 hover:bg-stone-900/40 transition`}
          >
            {/* Label */}
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 rounded-full bg-stone-500" />
              <span className="text-xs text-stone-300 font-extralight tracking-tighter">
                {asset.label.toUpperCase()}
              </span>
            </div>

            {/* Amount */}
            <span className="text-stone-400 text-xs font-thin text-right">
              ${asset.amount.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Money;
