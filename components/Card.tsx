import styled from "styled-components";
import Image from "next/image";
import { aspectRatio, border, stack } from "../style/mixins";
import React from "react";
import { Headline2, Paragraph } from "../style/typography";
import colors from "../style/colors";
import Link, { LinkProps } from "next/link";
import { LinkButton } from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 250px;
  background-color: ${colors.card.background};
  ${border(2, "light")}
`;
const ImageContainer = styled.div`
  width: 100%;
  ${aspectRatio(3 / 2)};
  transform: translate3d(-1rem, -1rem, 0);
`;

const Info = styled.div`
  padding: 1rem;
  ${stack("1rem", "y")}
  ${Headline2} {
    color: ${colors.card.headline};
  }
  ${Paragraph} {
    color: ${colors.card.description};
  }
`;

const StyledLinkButton = styled(LinkButton)`
  position: absolute;
  top: calc(100% - 1rem);
  right: 1rem;
  z-index: 2;
  background-color: ${colors.buttonBackground.primary};
`;
type Props = {
  headline: string;
  description: string;
  href: LinkProps["href"];
};

const Card: React.FC<Props> = ({ headline, description, href }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          objectFit="cover"
          layout="fill"
          src="https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80"
        />
      </ImageContainer>
      <Info>
        <Headline2>{headline}</Headline2>
        <Paragraph>{description}</Paragraph>
      </Info>
      <Link href={href}>
        <StyledLinkButton
          backgroundColor="secondary"
          borderColor="light"
          color="light"
        >
          see more
        </StyledLinkButton>
      </Link>
    </Container>
  );
};

export default Card;
