import styled from 'styled-components'
import { upToBreakpoint } from '../style/breakpoints'
import colors from '../style/colors'
import { fontSize } from '../style/typography'

const Link = styled.a`
    font-size: ${fontSize.headline2};
    text-decoration: none;
    color: ${colors.linkText};
    padding: 0.5em 0;
    ${upToBreakpoint('medium')} {
        font-size: ${fontSize.body1};
    }
`

export default Link
