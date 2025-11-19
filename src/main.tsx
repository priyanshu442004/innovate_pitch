
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

  createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId={"251993202162-mutfkig1lvhgivu126bdfl4iqhshjmbk.apps.googleusercontent.com"}>
  <App />
</GoogleOAuthProvider>
);
  
