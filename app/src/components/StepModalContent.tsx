import { StepFinalModal } from "@/components/StepFinalModal";
import { StepFirstModal } from "@/components/StepFirstModal";
import { StepSecondModal } from "@/components/StepSecondModal";
import { StepThirdModal } from "@/components/StepThirdModal";
import { AUTOMATON } from "@/constants";
import { Automaton } from "@/types";

type StepModalContentProps = {
  step: Automaton;
};
export const StepModalContent = ({ step }: StepModalContentProps) => {
  switch (step) {
    case AUTOMATON.DEFAULT:
      return "";
    case AUTOMATON.FIRST:
      return <StepFirstModal />;
    case AUTOMATON.SECOND:
      return <StepSecondModal />;
    case AUTOMATON.THIRD:
      return <StepThirdModal />;
    case AUTOMATON.FINAL:
      return <StepFinalModal />;
    default:
      const _: never = step;
      return _;
  }
};
