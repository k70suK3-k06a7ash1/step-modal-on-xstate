import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FormStepProvider } from "./providers/form-step.xstate.ts";
import { FormProvider } from "@/providers/form-provider.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormStepProvider.Provider>
      <App />
      <FormProvider />
    </FormStepProvider.Provider>
  </StrictMode>
);
