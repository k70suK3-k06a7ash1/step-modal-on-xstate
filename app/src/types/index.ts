import { AUTOMATON } from "@/constants";

export type Automaton = (typeof AUTOMATON)[keyof typeof AUTOMATON];
