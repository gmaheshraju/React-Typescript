import { ReactNode } from "react";
interface Props {
  children: ReactNode | ReactNode[] | JSX.Element | JSX.Element[];
}
const AlertAdvanced = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default AlertAdvanced;
