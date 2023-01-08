import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchSignUp } from "../apis/userApis";

export default function useSignUp() {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (form) => fetchSignUp(form),
    {
      onSuccess: async ({ token }) => {
        localStorage.setItem("token", token);
        toast.success("회원가입을 축하합니다!");
        // 다른 페이지로 이동 후 뒤로가기 시 로그인 페이지로 이동하지 않도록
        navigate("/", { replace: true });
      },
      onError: async (data) => {
        const { response } = data;
        const { data: errorData } = response;
        toast.error(errorData.details);
      },
    }
  );

  return { mutate, isLoading, isSuccess, isError };
}
