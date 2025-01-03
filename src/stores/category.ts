import { CategoryType } from "@types";
import { atomWithStorage } from "jotai/utils";

export const categoryAtom = atomWithStorage<CategoryType>("categoryAtom", "");
