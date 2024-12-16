import { useForm } from "@tanstack/react-form";
import { DispatchWithoutAction } from "react";

type Props = {
  afterSubmitAction: DispatchWithoutAction;
};
export const useFormState = ({ afterSubmitAction }: Props) => {
  const form = useForm({
    onSubmit: async () => {
      try {
        const postResult = await fetch("https://github.com/octocat", {
          method: "POST",
        });
        console.log("run");

        console.log({ postResult: await postResult.json() });
        if (postResult.ok) {
          afterSubmitAction();
        }
      } finally {
      }
    },
  });
  return { form };
};
