import { atomWithStorage } from "jotai/utils";

export const currentRecipient = atomWithStorage("currentRecipient", 0);
