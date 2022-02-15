import React from 'react'
import styled from 'styled-components'
import UserIcon from '../style/icons/user.svg'
import Image from 'next/image'
import colors from '../style/colors'
const Container = styled.div<Pick<Props, 'small'>>`
    position: relative;
    width: ${(p) => (p.small ? 2.5 : 4)}rem;
    height: ${(p) => (p.small ? 2.5 : 4)}rem;
    border-radius: 4rem;
    overflow: hidden;
    border: 2px solid ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.white};
    svg {
        width: ${(p) => (p.small ? 1 : 1.75)}rem;
    }
`

type Props = {
    photoURL: string | null
    className?: string
    small?: boolean
}

const ProfileImage: React.FC<Props> = ({ photoURL, className, small }) => {
    return (
        <Container className={className} small={small}>
            {photoURL ? (
                <Image
                    src={photoURL}
                    layout="fill"
                    alt="Profilbild"
                    objectFit="cover"
                />
            ) : (
                <UserIcon />
            )}
        </Container>
    )
}

export default ProfileImage
