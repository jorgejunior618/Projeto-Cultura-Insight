import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import Header from "../components/header";
import StoreProvider from "./StoreProvider";
import { containers } from "../constants";

export const metadata: Metadata = {
  title: "Projeto por Jorge Junior",
  description: "Simulação de Cadstro de fornecedores para o Lab Insight",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-Br">
      <body>
        <StoreProvider>
          <Header logged={true} />
          <AntdRegistry><main className={containers.viewContainer}>{children}</main></AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
