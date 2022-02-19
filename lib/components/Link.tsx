import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { fontSize } from '../style/typography'
import NextLink from 'next/link'
import { hover } from '../style/mixins'

export const linkStyle = css`
    font-size: ${fontSize.bodyM};
    text-decoration: none;
    color: ${colors.linkText};
    padding: 0.5em 0;
    cursor: pointer;

    ${hover(css`
        text-decoration: underline;
    `)};
`

const Container = styled(NextLink)``

const StyledLink = styled.a`
    ${linkStyle}
`

type Props = {
    href: string
    className?: string
}

const Link: React.FC<Props> = ({ children, href, className }) => {
    return (
        <Container href={href} passHref>
            <StyledLink className={className}>{children}</StyledLink>
        </Container>
    )
}

export default Link
