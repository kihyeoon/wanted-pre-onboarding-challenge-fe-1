import AuthForm from "../components/AuthForm";
import useLogIn from "../hooks/useLogIn";

function SignUp() {
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
