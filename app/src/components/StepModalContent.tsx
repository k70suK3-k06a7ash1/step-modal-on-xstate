import { StepFinalModal } from "@/components/step-modal/StepFinalModal";
import { StepFirstModal } from "@/components/step-modal/StepFirstModal";
import { StepSecondModal } from "@/components/step-modal/StepSecondModal";
import { StepThirdModal } from "@/components/step-modal/StepThirdModal";
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
