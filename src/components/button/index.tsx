import { Button, ButtonProps } from "antd";

type CustomButtonProps = {
  floating?: boolean;
  secondary?: boolean;
  cancel?: boolean;
}
export default function CustomButton({floating, secondary, cancel, className, ...props}: ButtonProps & CustomButtonProps) {
  const getBtnClassName = () => {
    let classes = [className];
    if (secondary) classes.push('secondary');
    else if (cancel) classes.push('cancel');
    if (floating) classes.push('floatingButton');

    return classes.join(' ');
  }
  return (
    <Button className={getBtnClassName()} {...props}>{props.children}</Button>
  );
}