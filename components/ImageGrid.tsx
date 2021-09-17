import React from 'react'
import styled from 'styled-components'
import Image from './Image'
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    height: 80vh;
    & > * {
        position: relative;
    }
    & > :nth-child(1n) {
        grid-area: 1 / 1 / 3 / 3;
    }
    & > :nth-child(2n) {
        grid-area: 3 / 1 / 4 / 2;
    }
    & > :nth-child(3n) {
        grid-area: 3 / 2 / 4 / 3;
    }
    & > :nth-child(4n) {
        grid-area: 2 / 3 / 4 / 4;
    }
    & > :nth-child(5n) {
        grid-area: 1 / 3 / 2 / 4;
    }
    & > :nth-child(6n) {
        grid-area: 1 / 4 / 3 / 5;
    }
    & > :nth-child(7n) {
        grid-area: 3 / 4 / 4 / 5;
    }
`

const ImageGrid: React.FC = () => {
    return (
        <Container>
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1592151450113-bdf5982da169?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1569850402748-11f762e9be07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1506057278219-795838d4c2dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1521973289773-1d99478a9973?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1486330071120-ba4e79e49431?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1955&q=80"
            />
            <Image
                alt=""
                layout="fill"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1512075735503-c265d3d40579?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
            />
        </Container>
    )
}

export default ImageGrid
