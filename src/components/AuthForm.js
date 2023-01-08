import { useForm } from "react-hook-form";

function AuthForm({ handleAuth }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm({ mode: "onChange" });

  const onValid = ({ email, password, password1 }) => {
    if (password !== password1) {
      return setError(
        "password1",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    } else {
      handleAuth({ email, password });
    }
  };

  console.log("err", errors);
  console.log(watch());

  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "이메일을 작성해주세요.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식으로 작성해주세요.",
            },
          })}
          placeholder="이메일"
        />
        <span>{errors?.email?.message}</span>

        <input
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "8글자 이상 입력해주세요.",
            },
          })}
          placeholder="비밀번호"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "위와 동일한 비밀번호를 입력해주세요.",
            minLength: {
              value: 8,
              message: "8글자 이상 입력해주세요.",
            },
          })}
          placeholder="비밀번호 확인"
        />
        <span>{errors?.password1?.message}</span>

        <button>계정 만들기</button>
        <span>{errors?.extraErrors?.message}</span>
      </form>
    </div>
  );
}

export default AuthForm;
