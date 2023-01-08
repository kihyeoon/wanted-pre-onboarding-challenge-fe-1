import AuthForm from "../components/AuthForm";
import useSignUp from "../hooks/useSignUp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const { mutate } = useSignUp();

  const handleLogIn = ({ email, password }) => {
    mutate({ email, password });
  };

  return (
    <>
      <AuthForm handleAuth={handleLogIn} />
    </>
  );
}

export default SignUp;
