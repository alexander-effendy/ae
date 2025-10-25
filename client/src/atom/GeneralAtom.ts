import { atom } from "jotai";

export const sidebarAtom = atom<string>("climbing");
export const songPlayingAtom = atom<boolean>(false);

export const investmentCalculatorOnAtom = atom<boolean>(false);