import React, { HTMLAttributes, ReactElement } from "react";
import { CardContainer } from "./styled";
import { fontSizes } from "@/constants";
import { MoreOutlined, PictureOutlined } from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";

type CardProps = {
  thumb?: string | null;
  showThumb?: boolean;
  options?: MenuProps;
  expandFunction?: () => void;
}

export default function Card({
  children,
  thumb,
  showThumb,
  options,
  expandFunction,
  ...props
}: HTMLAttributes<HTMLElement> & CardProps) {
  return (
    <CardContainer {...props}>
      <main className={showThumb || true ? "showThumb" : ""}>
        {showThumb || true ? <div className="thumb">
          {thumb ? (
          <img src={atob(thumb)} alt={"Thumbnail Fornecedor"} />
          ) : (
            <div><PictureOutlined /></div>
          )}
        </div> : null}
        <section className="cardChildren">{children}</section>
        {options ? <Dropdown
          trigger={['click']}
          menu={options}
          placement="top"
          overlayStyle={{ minWidth: 'fit-content' }}
        >
          <section className="options"><MoreOutlined /></section>
        </Dropdown> : null}
      </main>
    </CardContainer>
  );
}