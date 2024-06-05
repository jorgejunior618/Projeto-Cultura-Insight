import { Button, ButtonProps } from "antd";
import { ButtonWrapper } from "./styled";

export default function CustomButton(props: ButtonProps) {
  return (
    <ButtonWrapper><Button {...props}>{props.children}</Button></ButtonWrapper>
  );
}