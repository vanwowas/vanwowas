import styled from 'styled-components'
import { stack } from '../style/mixins'
import { Builder } from '../types/db'
import { LinkButton } from './Button'

const Container = styled.address`
    ${stack('2rem', 'y')}
    margin-top: 2rem;
    align-items: flex-start;
`

const LinkContainer = styled.div`
    ${stack('1rem', 'x')}
    margin-top: 2rem;
    align-items: flex-start;
`
type Props = {
    builder: Builder
    className?: string
    loggedIn: boolean
}

const Contacts: React.FC<Props> = ({ className, builder, loggedIn }) => {
    const { phone, email } = builder
    return (
        <Container className={className}>
            <h2>Kontaktdaten</h2>
            {loggedIn ? (
                <>
                    {phone && (
                        <LinkButton
                            href={`tel:${phone}`}
                            backgroundColor="secondary"
                            borderColor="dark"
                            color="light"
                        >
                            Hier Telefon: {phone}
                        </LinkButton>
                    )}
                    <LinkButton
                        href={`mailto:${email}`}
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    >
                        oder doch eine E-Mail an {email}
                    </LinkButton>
                </>
            ) : (
                <LinkContainer>
                    <LinkButton
                        backgroundColor="primary"
                        borderColor="dark"
                        color="dark"
                        href={'/login'}
                    >
                        login
                    </LinkButton>
                    <LinkButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="dark"
                        href={'/signup'}
                    >
                        sign up
                    </LinkButton>
                </LinkContainer>
            )}
        </Container>
    )
}

export default Contacts
