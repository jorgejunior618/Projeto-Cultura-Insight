import { LoadingOutlined } from "@ant-design/icons";
import { Spin, SpinProps } from "antd";

export function CustomSpin(props: SpinProps) {
  return (
    <Spin indicator={<LoadingOutlined spin />} {...props}>{props.children}</Spin>
  );
}