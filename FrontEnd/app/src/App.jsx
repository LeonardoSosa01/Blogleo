import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegisterForm } from "./componentes/RegisterForm";
import { LoginForm } from "./componentes/LoginForm";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
