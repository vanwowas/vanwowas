import styled, { css } from 'styled-components'

export const fontSize = {
    body1: '1rem',
    headline1: '2rem',
    headline2: '1.5rem',
}

export const typoStyle = {
    h1: css`
        font-size: ${fontSize.headline1};
        margin-bottom: 2rem;
    `,
    h2: css`
        font-size: ${fontSize.headline2};
        margin-bottom: 1.25rem;
    `,
    body1: css`
        font-size: ${fontSize.body1};
    `,
}

export const Headline1 = styled.h1`
    ${typoStyle.h1}
`

export const Headline2 = styled.h2`
    ${typoStyle.h2}
`

export const Paragraph = styled.p`
    ${typoStyle.body1}
`
