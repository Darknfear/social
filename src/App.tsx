import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignForm from "./_auth/forms/SignInForm";
import { Home } from "./_root/pages";
import SignUpForm from "./_auth/forms/SignUpForm";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index path="/home" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
