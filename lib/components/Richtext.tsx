import styled from 'styled-components'
import colors from '../style/colors'
import { typoStyle } from '../style/typography'
import { linkStyle } from './Link'

const Container = styled.div`
    h1 {
        ${typoStyle.h1}
    }
    h2 {
        ${typoStyle.h2}
    }
    p {
        ${typoStyle.body1}
    }
    a {
        ${linkStyle};
        color: ${colors.primary};
    }
`

type Props = {
    text: string
    className?: string
}

const Richtext: React.FC<Props> = ({ text, className }) => (
    <Container
        dangerouslySetInnerHTML={{ __html: text }}
        className={className}
    />
)

export default Richtext
