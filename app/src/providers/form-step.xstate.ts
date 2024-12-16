import { setup } from "xstate";

const AUTOMATON = {
  DEFAULT: "default",
  STEP_FIRST: "step-1",
  STEP_SECOND: "step-2",
  STEP_THIRD: "step-3",
  FINAL: "step-final",
} as const;

const EVENT_SYMBOL = {
  STEP_UP: "step-up",
  STEP_DOWN: "step-down",
} as const;

type Events =
  | {
      type: typeof EVENT_SYMBOL.STEP_UP;
    }
  | { type: typeof EVENT_SYMBOL.STEP_DOWN };
export const formStep = setup({
  types: {
    events: {} as Events,
  },
}).createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5gF8A0IB2B7CdGgAoBbAQwGMALASwzAEp8QAHLWKgFyqw0YA9EAjACZ0AT0FDkU5EA */
  initial: AUTOMATON.DEFAULT,
  states: {
    [AUTOMATON.DEFAULT]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.STEP_FIRST,
        },
      },
    },
    [AUTOMATON.STEP_FIRST]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.STEP_SECOND,
        },
      },
    },
    [AUTOMATON.STEP_SECOND]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.STEP_THIRD,
        },
      },
    },
    [AUTOMATON.STEP_THIRD]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.FINAL,
        },
      },
    },
    [AUTOMATON.FINAL]: {},
  },
});
