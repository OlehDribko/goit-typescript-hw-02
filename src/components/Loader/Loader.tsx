import ClipLoader from "react-spinners/ClipLoader";
import React from "react";
import { loaderProps } from "../../types/ui.types";

function Loader({ color = "red", size = 150 }: loaderProps) {
  return (
    <div className="sweet-loading">
      <ClipLoader
        color={color}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
export default Loader;
