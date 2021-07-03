import styled from 'styled-components'

export const fontSize = {
    body1: '1rem',
    headline1: '2rem',
    headline2: '1,5rem',
}

export const Headline1 = styled.h1`
    font-size: ${fontSize.headline1};
`

export const Headline2 = styled.h2`
    font-size: ${fontSize.headline2};
`

export const Paragraph = styled.p`
    font-size: ${fontSize.body1};
`

export const Body1 = styled.span`
    font-size: ${fontSize.headline1};
`
