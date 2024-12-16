import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AUTOMATON, EVENT_SYMBOL } from "@/constants";
import { FormStepProvider } from "@/providers/form-step.xstate";
import { Automaton } from "@/types";
export const FormProvider = () => {
  const { useSelector, useActorRef } = FormStepProvider;
  const { value } = useSelector((state) => state);
  console.log({ value });
  const actor = useActorRef();
  const handleChangeStepDown = () =>
    actor.send({ type: EVENT_SYMBOL.STEP_DOWN });
  const handleChangeStepUp = () => {
    console.log("step up");
    actor.send({ type: EVENT_SYMBOL.STEP_UP });
  };
  return (
    <AlertDialog
      open={value !== AUTOMATON.DEFAULT}
      onOpenChange={handleChangeStepDown}
    >
      <AlertDialogContent className="min-w-full">
        <AlertDialogHeader>
          <AlertDialogTitle>Step Modal</AlertDialogTitle>
          <AlertDialogDescription>
            <StepModalContent step={value} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button onClick={handleChangeStepUp}>Next</Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

type StepModalContentProps = {
  step: Automaton;
};
const StepModalContent = ({ step }: StepModalContentProps) => {
  switch (step) {
    case AUTOMATON.DEFAULT:
      return "default";
    case AUTOMATON.FIRST:
      return "step1";
    case AUTOMATON.SECOND:
      return "step2";
    case AUTOMATON.THIRD:
      return "step3";
    case AUTOMATON.FINAL:
      return "final";

    default:
      const _: never = step;
      return _;
  }
};
