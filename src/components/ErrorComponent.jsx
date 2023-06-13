import React from "react";

const ErrorComponent = (props) => {
  const { error, color } = props;
  return (
    <div style={{ marginBlock: "1em", color: color || "#F6F8FF" }}>
      <p>{error?.response?.data?.message}</p>
    </div>
  );
};

export default ErrorComponent;
