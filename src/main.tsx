import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import '@aws-amplify/ui-react/styles.css';
import { Authenticator } from "@aws-amplify/ui-react-native";

import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <Authenticator components={{
        SignIn: (props) => (
          <Authenticator.SignIn {...props} hideSignUp />
           ),
        }}>
          <App />
      </Authenticator>
    </Authenticator.Provider>
  </React.StrictMode>
);
