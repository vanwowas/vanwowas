import styled, { css } from 'styled-components'
import colors from './colors'

export const fontSize = {
    bodyM: '1rem',
    bodyL: '1.3rem',
    headline1: '2.6rem',
    headline2: '2rem',
    headline3: '1.5rem',
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
    h3: css`
        font-size: ${fontSize.headline3};
        margin-bottom: 1.25rem;
    `,
    bodyM: css`
        font-size: ${fontSize.bodyM};
    `,
    bodyL: css`
        font-size: ${fontSize.bodyL};
    `,
}

type Props = {
    color?: keyof typeof colors
}

export const Headline1 = styled.h1<Props>`
    ${typoStyle.h1};
    color: ${(p) => colors[p.color || 'dark']};
`

export const Headline2 = styled.h2<Props>`
    ${typoStyle.h2};
    color: ${(p) => colors[p.color || 'dark']};
`

export const Headline3 = styled.h3<Props>`
    ${typoStyle.h3};

    color: ${(p) => colors[p.color || 'dark']};
`

export const BodyM = styled.p<Props>`
    ${typoStyle.bodyM};
    color: ${(p) => colors[p.color || 'dark']};
`

export const BodyL = styled.p<Props>`
    ${typoStyle.bodyL}
    color: ${(p) => colors[p.color || 'dark']};
`
