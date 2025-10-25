// Define one year’s breakdown
export interface InvestmentYearlyResult {
  year: number;
  balance: number;
}

// Define the full data set you store in the atom
export interface InvestmentCalculationData {
  startYear: number;
  endYear: number;
  results: InvestmentYearlyResult[];
}

// Your atom with explicit typing
import { atom } from "jotai";

export const InvestmentCalculationDataAtom =
  atom<InvestmentCalculationData | null>(null);
