interface Props {
  children: string;
}
const AlertBasic = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default AlertBasic;
