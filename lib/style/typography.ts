import styled, { css } from 'styled-components'

export const fontSize = {
    bodyM: '1rem',
    bodyL: '1.3rem',
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
    bodyM: css`
        font-size: ${fontSize.bodyM};
    `,
    bodyL: css`
        font-size: ${fontSize.bodyL};
    `,
}

export const Headline1 = styled.h1`
    ${typoStyle.h1}
`

export const Headline2 = styled.h2`
    ${typoStyle.h2}
`

export const BodyM = styled.p`
    ${typoStyle.bodyM}
`

export const BodyL = styled.p`
    ${typoStyle.bodyL}
`
