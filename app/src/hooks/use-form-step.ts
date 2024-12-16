import { EVENT_SYMBOL } from "@/constants";
import { FormStepProvider } from "@/providers/form-step.xstate";

export const useFormStep = () => {
  const { useActorRef } = FormStepProvider;

  const actor = useActorRef();
  const handleChangeStepDown = () =>
    actor.send({ type: EVENT_SYMBOL.STEP_DOWN });
  const handleChangeStepUp = () => {
    console.log("step up");
    actor.send({ type: EVENT_SYMBOL.STEP_UP });
  };

  return {
    handleChangeStepDown,
    handleChangeStepUp,
  };
};
