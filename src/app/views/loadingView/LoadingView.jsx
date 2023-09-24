import React from "react";
import * as Styled from "./LoadingView.styles";
import bus from "../../assets/bus.svg";

export const LoadingView = () => {
  return (
    <Styled.LoadingViewWrapper>
      <Styled.Loader src={bus} />
    </Styled.LoadingViewWrapper>
  );
};
