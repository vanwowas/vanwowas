import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { fontSize } from '../style/typography'

export const linkStyle = css`
    font-size: ${fontSize.bodyM};
    text-decoration: none;
    color: ${colors.linkText};
    padding: 0.5em 0;
    :hover {
        text-decoration: underline;
    }
`

const Link = styled.a`
    ${linkStyle}
`

export default Link
