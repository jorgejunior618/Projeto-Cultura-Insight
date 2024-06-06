"use client"

import { useAppDispatch, useAppSelector } from "@/hooks";
import { usePathname, useRouter } from "next/navigation";
import { HeaderContainer, LoginContainer, LogoutContainer } from "./styled";
import { LogoutOutlined } from "@ant-design/icons";
import { fontSizes, fontWeights } from "@/constants";
import { sessionActions } from "@/redux/session/sessionSlice";
import { UserSessionType } from "@/redux/reduxTypes";
import { useEffect } from "react";

export default function Header({ user }: {user?: UserSessionType | null}) {
  const sessionState = useAppSelector(state => state.sessionState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (user && !sessionState.user) {
      dispatch(sessionActions.updateLogin(user))
    }
  }, [user]);

  const handleLogout = async () => {
    await dispatch(sessionActions.logout());
    try {
      router.push('/login');
    } catch (erro) {
      console.log({erro});
      
    }
  }

  return (
    <HeaderContainer>
      <img src="/images/logo-insight-completo.jpg" alt="Logotipo Insight" width={190}/>
      {sessionState.logged
        ? <LogoutContainer onClick={handleLogout}><LogoutOutlined/></LogoutContainer>
        : pathname.startsWith('/login') ?
        null : <LoginContainer className={fontSizes.medium + ' ' + fontWeights.bold}>Login</LoginContainer>
      }
    </HeaderContainer>
  );
}