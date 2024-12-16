import { setup } from "xstate";
import { createActorContext } from "@xstate/react";
import { AUTOMATON, EVENT_SYMBOL } from "@/constants";

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
          target: AUTOMATON.FIRST,
        },
      },
    },
    [AUTOMATON.FIRST]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.SECOND,
        },
        [EVENT_SYMBOL.STEP_DOWN]: {
          target: AUTOMATON.DEFAULT,
        },
      },
    },
    [AUTOMATON.SECOND]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.THIRD,
        },
        [EVENT_SYMBOL.STEP_DOWN]: {
          target: AUTOMATON.FIRST,
        },
      },
    },
    [AUTOMATON.THIRD]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.FINAL,
        },
        [EVENT_SYMBOL.STEP_DOWN]: {
          target: AUTOMATON.SECOND,
        },
      },
    },
    [AUTOMATON.FINAL]: {
      on: {
        [EVENT_SYMBOL.STEP_UP]: {
          target: AUTOMATON.DEFAULT,
        },
        [EVENT_SYMBOL.STEP_DOWN]: {
          target: AUTOMATON.THIRD,
        },
      },
    },
  },
});

export const FormStepProvider = createActorContext(formStep);
