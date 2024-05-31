"use client"

import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/navigation";
import { HeaderContainer, LoginContainer, LogoutContainer } from "./styled";
import { LogoutOutlined } from "@ant-design/icons";
import { colors, fontSizes, fontWeights } from "@/constants";

type HeaderProps = {
  logged: boolean;
};

export default function Header({logged}: HeaderProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    // await dispatch(logout());
    try {
      router.push('/login');
    } catch (erro) {
      console.log({erro});
      
    }
  }

  return (
    <HeaderContainer>
      <img src="/images/logo-insight-completo.jpg" alt="Logotipo Insight" width={190}/>
      {logged
        ? <LogoutContainer><LogoutOutlined/></LogoutContainer>
        : <LoginContainer className={fontSizes.medium + ' ' + fontWeights.bold}>Login</LoginContainer>
      }
    </HeaderContainer>
  );
}