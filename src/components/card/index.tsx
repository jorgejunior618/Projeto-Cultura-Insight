import React, { HTMLAttributes, ReactElement } from "react";
import { CardContainer } from "./styled";
import { fontSizes } from "@/constants";
import { PictureOutlined } from "@ant-design/icons";

type CardProps = {
  thumb?: string | null;
  expandFunction?: () => void;
}

export default function Card({
  children,
  thumb,
  expandFunction,
  ...props
}: HTMLAttributes<HTMLElement> & CardProps) {
  return (
    <CardContainer {...props}>
      <main>
        <div className="thumb">
          {thumb ? (
          <img src={atob(thumb)} alt={"Thumbnail Fornecedor"} />
          ) : (
            <div><PictureOutlined /></div>
          )}
        </div>
        {children}
      </main>
    </CardContainer>
  );
}