import { LoadMoreBtnProps } from "../../types/ui.types";
import React from "react";

const LoadMoreBtn = ({ onClick }: LoadMoreBtnProps): JSX.Element => {
  return (
    <div>
      <button onClick={onClick}>Load more</button>
    </div>
  );
};

export default LoadMoreBtn;
