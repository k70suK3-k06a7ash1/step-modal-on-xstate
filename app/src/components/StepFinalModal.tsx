import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useFormStep } from "@/hooks/use-form-step";

export const StepFinalModal = () => {
  const { handleChangeStepDown, handleChangeStepUp } = useFormStep();

  return (
    <AlertDialogContent>
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
