import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchLogIn } from "../apis/userApis";

export default function useLogIn() {
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError } = useMutation(
    (form) => fetchLogIn(form),
    {
      onSuccess: async ({ token }) => {
        localStorage.setItem("token", token);
        toast.success("로그인 되었습니다 !");
        // 다른 페이지로 이동 후 뒤로가기 시 로그인 페이지로 이동하지 않도록
        navigate("/", { replace: true });
      },
      onError: async (data) => {
        const { response } = data;
        const { status, data: errorData } = response;

        if (status === 401) {
          toast.error("아이디 또는 비밀번호를 다시 확인해주세요.");
        } else if (status === 403) {
          toast.error("유효하지 않은 접근입니다.");
        } else if (status >= 500) {
          toast.error("서버가 원활하지 않습니다.");
        } else {
          toast.error(errorData.details);
        }
      },
    }
  );

  return { mutate, isLoading, isSuccess, isError };
}
