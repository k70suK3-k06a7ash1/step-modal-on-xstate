import {
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useFormState } from "@/hooks/use-form-state";
import { useFormStep } from "@/hooks/use-form-step";

export const StepFirstModal = () => {
  const { handleChangeStepDown, handleChangeStepUp } = useFormStep();
  const { form } = useFormState({ afterSubmitAction: handleChangeStepUp });

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Step1 Modal</AlertDialogTitle>
        <AlertDialogDescription>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              form.handleSubmit();
            }}
          >
            <Input />
            <Button type="submit">Submit</Button>
          </form>
        </AlertDialogDescription>
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
