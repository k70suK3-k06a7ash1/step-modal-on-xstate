import { Button } from "@/components/ui/button";
import "./App.css";
import { FormStepProvider } from "@/providers/form-step.xstate";
import { EVENT_SYMBOL } from "@/constants";

function App() {
  const { useActorRef } = FormStepProvider;
  const actor = useActorRef();
  const handleClick = () => actor.send({ type: EVENT_SYMBOL.STEP_UP });

  return (
    <>
      <Button onClick={handleClick}>Hello</Button>
    </>
  );
}

export default App;
