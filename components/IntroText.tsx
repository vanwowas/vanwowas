import React from "react";
import styled from "styled-components";
import { upFromBreakpoint } from "../style/breakpoints";
import colors from "../style/colors";
import { stack } from "../style/mixins";
import { Headline1, Paragraph } from "../style/typography";

type Props = {
  headline: string;
  text: string;
  fullWidth?: boolean;
  className?: string;
};

const Intro = styled.section<Pick<Props, "fullWidth">>`
  ${p =>
    !p.fullWidth &&
    `${upFromBreakpoint("medium")} {
    max-width: 60ch;
  }`}
  ${stack("1rem", "y")}
  ${Headline1} {
    color: ${colors.textColor.secondary};
  }
`;

const IntroText: React.FC<Props> = ({
  headline,
  text,
  fullWidth = false,
  className
}) => {
  return (
    <Intro className={className} fullWidth={fullWidth}>
      <Headline1>{headline}</Headline1>
      <Paragraph>{text}</Paragraph>
    </Intro>
  );
};
export default IntroText;
