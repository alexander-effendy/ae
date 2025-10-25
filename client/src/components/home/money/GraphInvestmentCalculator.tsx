import { useMediaQuery } from 'react-responsive';

import InvestmentChart from "./investment/InvestmentChart";
import InvestmentForm from "./investment/InvestmentForm";

export interface FormValues {
  initialDeposit: number;
  annualContribution: number;
  expectedReturnRate: number;
  years: number;
}

export const description = "An interactive area chart"

const GraphInvestmentCalculator = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <div
      style={{ height: 'calc(100vh - 50px)' }}
      className={`w-full flex gap-2 ${isLargeScreen ? 'flex-row' : 'flex-col'} p-2`}
    >
      {/* Wrapper for the form */}
      <div className="w-full lg:flex-[0.5] bg-stone-900 max-h-full flex flex-col min-h-0 overflow-auto">
        <InvestmentForm />
      </div>

      {/* Wrapper for the chart */}
      <div className="flex-1 flex flex-col min-h-0 overflow-auto">
        <InvestmentChart />
      </div>
    </div>
  );
};

export default GraphInvestmentCalculator;