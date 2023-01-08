import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./routes/Todo";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
