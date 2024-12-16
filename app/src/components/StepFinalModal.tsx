import {
  //   AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { EVENT_SYMBOL } from "@/constants";
import { FormStepProvider } from "@/providers/form-step.xstate";

export const StepFinalModal = () => {
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
    <AlertDialogContent className="min-w-full">
      <AlertDialogHeader>
        <AlertDialogTitle>final Modal</AlertDialogTitle>
        <AlertDialogDescription></AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <Button variant={"destructive"} onClick={handleChangeStepDown}>
          Cancel
        </Button>
        <Button onClick={handleChangeStepUp}>Next</Button>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
};
