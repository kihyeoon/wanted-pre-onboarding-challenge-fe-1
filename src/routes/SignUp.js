import AuthForm from "../components/AuthForm";
import useSignUp from "../hooks/useSignUp";

function SignUp() {
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
