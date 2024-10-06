import { post } from "@apis/api";
import { useMutation } from "@tanstack/react-query";
import { ErrorResponse, CodeResponseType } from "@types";
import { useNavigate } from "react-router-dom";

interface LoginDataType {
  username: string;
  password: string;
}

const postAdminLogin = async (
  loginData: LoginDataType
): Promise<CodeResponseType> => {
  try {
    const response = await post<CodeResponseType>(
      `/api/v1/admin/authenticate`,
      loginData
    );
    return response.data;
  } catch (error) {
    const errorResponse = error as ErrorResponse;
    const errorData = errorResponse.response.data;
    throw errorData;
  }
};

export const usePostAdminLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (loginData: LoginDataType) => postAdminLogin(loginData),
    onSuccess: (data) => {
      if (data.code === "success") {
        localStorage.setItem("accessToken", data.code);
        navigate("/admin");
      }
    },
  });
};
