import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  //   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AUTOMATON, EVENT_SYMBOL } from "@/constants";
import { FormStepProvider } from "@/providers/form-step.xstate";
export const FormProvider = () => {
  const { useSelector, useActorRef } = FormStepProvider;
  const { value } = useSelector((state) => state);
  const actor = useActorRef();
  const handleChange = () => actor.send({ type: EVENT_SYMBOL.STEP_DOWN });
  return (
    <AlertDialog open={value !== AUTOMATON.DEFAULT} onOpenChange={handleChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
