"use client"

import { Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { KeyboardEvent, useCallback, useEffect, useState } from "react";
import { InputWrapper, LoginWrapper } from "./styled";
import { fontSizes, fontWeights } from "@/constants";
import CustomButton from "@/components/button";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { sessionActions } from "@/redux/session/sessionSlice";
import { useRouter } from "next/navigation";
import { CustomSpin } from "@/components/customSpin";

export default function Login() {
  const sessionState = useAppSelector(state => state.sessionState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [ loginText, setLoginText ] = useState("");
  const [ passwordText, setPasswordText ] = useState("");

  const handleLogin = useCallback(() => {
    if (loginText.length === 0) return message.warning("Informe um nome de usuário");
    if (passwordText.length === 0) return message.warning("Informe uma senha");
    dispatch(sessionActions.login(loginText, passwordText));
  }, [loginText, passwordText, dispatch]);

  const keyHandler = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === "Enter") handleLogin();
  }, [handleLogin])

  useEffect(() => {
    if (sessionState.logged) router.push('/');
  }, [sessionState, router]);

  return (
    <LoginWrapper>
      <CustomSpin spinning={sessionState.loading} fullscreen />
      <h1 className={fontSizes.xtraBig + ' ' + fontWeights.xtraBold}>Login</h1>
      <InputWrapper>
        <label htmlFor="login">Usuário</label>
        <Input
          value={loginText}
          onChange={e => setLoginText(e.target.value)}
          name="login"
          placeholder="seu_usuario"
          onKeyUp={keyHandler}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="password">Senha</label>
        <Input.Password
          value={passwordText}
          onChange={e => setPasswordText(e.target.value)}
          name="password"
          iconRender={(visible) => (visible ? <EyeInvisibleOutlined /> : <EyeTwoTone />)}
          onKeyUp={keyHandler}
        />
      </InputWrapper>
      <CustomButton onClick={handleLogin}><span className={fontWeights.bold}>Entrar</span></CustomButton>
    </LoginWrapper>
  );
}