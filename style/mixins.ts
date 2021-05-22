import { css, FlattenSimpleInterpolation } from "styled-components";
import colors, { Colors } from "./colors";

export const hover = (
  style: FlattenSimpleInterpolation | string
): FlattenSimpleInterpolation => {
  return css`
    @media (hover: hover) and (pointer: fine) {
      :hover {
        ::before {
          ${style}
        }
      }
    }
    :active {
      ::before {
        ${style}
      }
    }
  `;
};

export const stack = (space: string, direction: "x" | "y" = "x") => css`
  display: flex;
  flex-direction: ${direction === "x" ? "row" : "column"};
  & > * {
    margin: 0;
  }

  & > * + * {
    ${direction === "x" ? `margin-left: ${space}` : `margin-top: ${space}`};
  }
`;

export const aspectRatio = (
  ratio: number,
  position: string | false = "relative"
) => css`
  ${position && `position: ${position}`};
  ::after {
    content: "";
    display: block;
    padding-top: ${(100 / ratio).toFixed(4)}%;
  }
`;

export const border = (
  width: number,
  color: keyof Colors["border"],
  style?: FlattenSimpleInterpolation
) => css`
  position: relative;
  ::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: ${width}px solid ${colors.border[color]};
    ${style}
  }
`;
