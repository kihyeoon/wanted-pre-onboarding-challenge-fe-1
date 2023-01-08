import AuthForm from "../components/AuthForm";
import useLogIn from "../hooks/useLogIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const { mutate } = useLogIn();

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
