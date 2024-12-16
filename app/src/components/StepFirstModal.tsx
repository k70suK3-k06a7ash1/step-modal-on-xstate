import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useFormStep } from "@/hooks/use-form-step";

export const StepFirstModal = () => {
  const { handleChangeStepDown, handleChangeStepUp } = useFormStep();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Step1 Modal</AlertDialogTitle>
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
