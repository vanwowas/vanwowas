import styled, { css } from 'styled-components'
import React from 'react'
import { upToBreakpoint } from '../style/breakpoints'

type PageProps = {
    backgroundIllustration?: boolean
    className?: string
}

const Container = styled.main<PageProps>`
    ${(p) =>
        p.backgroundIllustration &&
        css`
            background-repeat: no-repeat;
            background-size: 110%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 1494' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='944' cy='150' r='120' stroke='%23E15D3F' stroke-width='60'/%3E%3Cpath d='M944 588L800.5 194.5l143.5 67 143.24-67L944 588z' fill='%23E15D3F'/%3E%3Ccircle cx='600' cy='894' r='600' fill='%233F8379'/%3E%3C/svg%3E");
            background-position: center 10vmin;
            ${upToBreakpoint('medium')} {
                background-position: center 30vh;
            }
        `}
`

const Content = styled.div`
    ${upToBreakpoint('small')} {
        padding: 1rem;
    }
`

const PageBs: React.FC<PageProps> = ({
    children,
    backgroundIllustration = false,
    className,
}) => {
    return (
        <>
            <Container backgroundIllustration={backgroundIllustration}>
                <Content className={className}>{children}</Content>
            </Container>
        </>
    )
}

export default PageBs
