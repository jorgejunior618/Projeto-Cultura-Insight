import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import "./globals.css";
import Header from "../components/header";
import StoreProvider from "./StoreProvider";
import { containers } from "../constants";
import { cookies } from "next/headers";
import { sessionName } from "@/utils/consts";
import { decrypt } from "@/utils/functions";
import { AppSessionType } from "@/redux/reduxTypes";
export const metadata: Metadata = {
  title: "Projeto por Jorge Junior",
  description: "Simulação de Cadstro de fornecedores para o Lab Insight",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  let user = undefined;
  const currSession = cookieStore.get(sessionName)?.value;

  if (currSession) {
    const sess: {session: AppSessionType} | null = await decrypt(currSession)
    if (sess) user = sess.session.user;
  }

  return (
    <html lang="pt-Br">
      <body>
        <StoreProvider>
          <Header user={user} />
          <AntdRegistry><main className={containers.viewContainer}>
            <section className={containers.mainContainer}>{children}</section>
          </main></AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
