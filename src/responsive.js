import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 420px) {
      ${props}
    }
  `;
};

export const smallScreenMobile = (props) => {
  return css`
    @media only screen and (max-width: 376px) {
      ${props}
    }
  `;
};
