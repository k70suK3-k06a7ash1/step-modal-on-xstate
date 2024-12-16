export const AUTOMATON = {
  DEFAULT: "default",
  FIRST: "step-1",
  SECOND: "step-2",
  THIRD: "step-3",
  FINAL: "step-final",
} as const;

export const EVENT_SYMBOL = {
  STEP_UP: "step-up",
  STEP_DOWN: "step-down",
} as const;
