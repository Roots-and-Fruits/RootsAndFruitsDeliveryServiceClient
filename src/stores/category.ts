import { atomWithStorage } from "jotai/utils";

export const categoryAtom = atomWithStorage<string>("categoryAtom", "");
