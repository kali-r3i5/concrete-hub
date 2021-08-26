import React from "react";
import Loader from "react-loader-spinner";

const LoaderComponent: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        paddingTop: 250,
        width: 1000,
        maxWidth: 1200,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default LoaderComponent;
