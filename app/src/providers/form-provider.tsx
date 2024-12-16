import { StepModalContent } from "@/components/StepModalContent";
import {
  AlertDialog,
  //   AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { AUTOMATON, EVENT_SYMBOL } from "@/constants";
import { FormStepProvider } from "@/providers/form-step.xstate";
export const FormProvider = () => {
  const { useSelector, useActorRef } = FormStepProvider;
  const { value } = useSelector((state) => state);
  console.log({ value });
  const actor = useActorRef();
  const handleChangeStepDown = () =>
    actor.send({ type: EVENT_SYMBOL.STEP_DOWN });

  return (
    <AlertDialog
      open={value !== AUTOMATON.DEFAULT}
      onOpenChange={handleChangeStepDown}
    >
      <StepModalContent step={value} />
    </AlertDialog>
  );
};
