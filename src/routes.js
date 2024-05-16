import React, { useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import NotFoundPage from "./components/NotFound";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "gray";
    showAlert("dark mode has been enabled", "success")
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    showAlert("light mode has been enabled", "success")
  }
}
const showAlert = (message, type) => {
  setAlert({
    message: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 2000);
}

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootLayout />}
      errorElement={<NotFoundPage />}>

      <Navbar
        title="TextUtils"
        aboutText="About Us"
        mode={mode}
        toggleMode={toggleMode}
      />

      <Alert alert={alert} />

      <Route path="/about" element={<About mode={mode} />} />

      <Route
        path="/"
        errorElement={<NotFoundPage />}
        element={
          <TextForm
            showAlert={showAlert}
            heading="Enter the text to analyze below"
            mode={mode}
          />
        }
      />

    </Route>
  )
);

export default appRouter;
