import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}
const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div
      style={{
        backgroundColor: "indigo",
        color: "white",
        display: "flex",
        flexDirection: "column",
        padding: "50px",
        fontSize: 24,
      }}
    >
      <p>this is from wrapper component</p>
      {children}
    </div>
  );
};

export default Wrapper;
