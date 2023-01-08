import axiosInstance from "../utils/axiosInstance";

export const fetchSignUp = async ({ email, password }) => {
  const { data } = await axiosInstance.post("/users/create", {
    email,
    password,
  });
  return data;
};

export const fetchLogIn = async ({ email, password }) => {
  const { data } = await axiosInstance.post("/users/login", {
    email,
    password,
  });
  return data;
};
