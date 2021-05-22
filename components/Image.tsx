import styled from "styled-components";
import NextImage, { ImageProps } from "next/image";

export const ImageContainer = styled.div``;

const Image: React.FC<ImageProps> = ({ className, ...props }) => {
  return (
    <ImageContainer className={className}>
      <NextImage {...props} />
    </ImageContainer>
  );
};

export default Image;
