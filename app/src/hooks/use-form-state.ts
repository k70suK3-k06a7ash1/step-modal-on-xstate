import { useForm } from "@tanstack/react-form";
import { DispatchWithoutAction } from "react";

type Props = {
  afterSubmitAction: DispatchWithoutAction;
};
export const useFormState = ({ afterSubmitAction }: Props) => {
  const form = useForm({
    onSubmit: async () => {
      console.log("run submit");
      afterSubmitAction();
    },
  });
  return { form };
};
