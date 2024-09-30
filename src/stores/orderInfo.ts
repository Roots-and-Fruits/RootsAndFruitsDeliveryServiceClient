import { OrderInfoData } from "@types";
import { atom } from "jotai";

export const orderNumberAtom = atom<string>("");
export const previousOrderNumberAtom = atom<string>("");
export const orderInfoAtom = atom<OrderInfoData | null>(null);
