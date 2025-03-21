import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { AuthProvider } from "./store/auth.jsx";
import Loading from "./pages/Loading.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <StrictMode>
      <App onLoad={<Loading />} />
    </StrictMode>
  </AuthProvider>
);
