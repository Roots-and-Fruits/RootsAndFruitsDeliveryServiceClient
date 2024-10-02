import { Button, Input } from "@components";
import { useState } from "react";
import {
  formStyle,
  inputWrapper,
  labelStyle,
  loginLayout,
} from "./AdminLogin.style";
import { usePostAdminLogin } from "@apis/domains/admin/usePostAdminLogin";

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState("");
  const [adminPw, setAdminPw] = useState("");

  const { mutate } = usePostAdminLogin();

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminUsername(e.target.value);
  };

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminPw(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ username: adminUsername, password: adminPw });
  };

  return (
    <main css={loginLayout}>
      <form css={formStyle} onSubmit={handleSubmit}>
        <div css={inputWrapper}>
          <label htmlFor="adminUsername" css={labelStyle}>
            아이디
          </label>
          <Input
            type="text"
            id="adminUsername"
            value={adminUsername}
            onChange={handleUsernameChange}
          />
        </div>
        <div css={inputWrapper}>
          <label htmlFor="adminPw" css={labelStyle}>
            비밀번호
          </label>
          <Input
            type="password"
            id="adminPw"
            value={adminPw}
            onChange={handlePwChange}
          />
        </div>
        <Button type="button" variant="fill">
          로그인
        </Button>
      </form>
    </main>
  );
};

export default AdminLogin;
