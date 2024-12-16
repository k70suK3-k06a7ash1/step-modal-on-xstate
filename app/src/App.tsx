import { Button } from "@/components/ui/button";
import "./App.css";
import { FormStepProvider } from "@/providers/form-step.xstate";
import { EVENT_SYMBOL } from "@/constants";
import { useEffect } from "react";

function App() {
  const { useActorRef } = FormStepProvider;
  const actor = useActorRef();
  const handleClick = () => actor.send({ type: EVENT_SYMBOL.STEP_UP });

  useEffect(() => {
    (async () => {
      // await worker.start();
      const result = await fetch("https://github.com/octocat", {
        method: "GET",
        cache: "no-cache",
      });

      const postResult = await fetch("https://github.com/octocat", {
        method: "POST",
      });
      console.log({ result: await result.json() });
      console.log({ postResult: await postResult.json() });
    })();
  }, []);
  return (
    <>
      <Button onClick={handleClick}>Hello</Button>
    </>
  );
}

export default App;
