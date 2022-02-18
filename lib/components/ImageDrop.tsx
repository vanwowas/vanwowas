import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import colors from '../style/colors'
import { FileDrop } from 'react-file-drop'
import { Image } from '../types/db'
import { AddButton } from './AddButton'
import NextImage from 'next/image'
import TextArea from './TextArea'
import { upToBreakpoint } from '../style/breakpoints'
import Delete from '../style/icons/delete.svg'

import Button from '../components/Button'
import Checkbox from './Checkbox'
const Container = styled.div<{ empty: boolean; isDragActive: boolean }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    min-height: 40vh;
    ${upToBreakpoint('medium')} {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 1rem;
        min-height: 40vh;
    }
    input {
        width: 0;
        height: 0;
        opacity: 0;
        display: block;
    }
    ${(p) =>
        p.empty &&
        css`
            display: flex;
            align-items: center;
            justify-content: center;
        `}
    ${(p) =>
        p.isDragActive &&
        css`
            background-color: ${colors.buttonBackground.tertiary};
            opacity: 0.75;
            border-radius: 0.5rem;
        `}
`
const ImageContainer = styled.div`
    aspect-ratio: 1;
    position: relative;
    overflow: hidden;
`
const ImageOverlay = styled.div`
    position: absolute;
    bottom: 8px;
    left: 8px;
    right: 8px;
    background-color: ${colors.buttonBackground.primary};
    opacity: 0.75;
    padding: 1rem;
    align-items: flex-end;
    border-radius: 8px;
    * {
        max-width: 100%;
        min-width: 100%;
        flex: 1 0 auto;
    }
`
const RoundButton = styled(Button)`
    position: absolute;
    top: 1rem;
    left: 1rem;
    z-index: 1;
    color: white;

    svg {
        height: 1.5rem;
        width: 1.5rem;
    }
`

const MainImage = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
`

export type ImageFile = Image & {
    file?: File
}

type Props = {
    defaultImages: Image[] | null
    onChange: (images: ImageFile[]) => void
}

const ImageDrop: React.FC<Props> = ({ defaultImages, onChange }) => {
    const [isDragActive, setIsDragActive] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)
    const [images, setImages] = useState<Image[] | null>(defaultImages)
    const [mainImage, setMainImage] = useState(() => {
        const index = images?.findIndex((i) => i.mainImage === true)
        if (index && index >= 0) {
            return index
        }
        return 0
    })
    const handleFrameDrag = useCallback(
        (isDragging: boolean) => {
            if (isDragActive !== isDragging) {
                setIsDragActive(isDragging)
            }
        },
        [isDragActive]
    )

    const handleDrop = useCallback(
        (event: React.ChangeEvent<HTMLInputElement> | FileList | null) => {
            const files: ImageFile[] = Array.from(
                event instanceof FileList ? event : event?.target.files || []
            ).map((f) => ({
                file: f,
                description: null,
                url: URL.createObjectURL(f),
                mainImage: false,
            }))
            onChange([...(images ?? []), ...files])
            setImages([...(images ?? []), ...files])
            setIsDragActive(false)
        },
        [images, onChange]
    )

    const onTargetClick = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    const empty = !images?.length

    useEffect(() => {
        const data = images?.map((img, i) => ({
            ...img,
            mainImage: i === mainImage,
        }))
        if (data) {
            setImages(data)
            onChange(data)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mainImage])

    return (
        <FileDrop
            onDragOver={() => handleFrameDrag(true)}
            onDragLeave={() => handleFrameDrag(false)}
            onDrop={handleDrop}
        >
            <Container empty={empty} isDragActive={isDragActive}>
                {images?.map((img, index) => (
                    <ImageContainer key={img.url}>
                        <NextImage
                            unoptimized={img.url.includes('blob')}
                            src={img.url}
                            layout="fill"
                            objectFit="cover"
                        />

                        <RoundButton
                            round
                            backgroundColor="secondary"
                            color="light"
                            borderColor="light"
                            onClick={async () => {
                                const data = images.filter(
                                    (i) => i.url !== img.url
                                )
                                setImages(data)
                                onChange(data)
                            }}
                        >
                            <Delete />
                        </RoundButton>
                        <ImageOverlay onClick={(ev) => ev.stopPropagation()}>
                            <TextArea
                                defaultValue={img.description ?? undefined}
                                onChange={(e) => {
                                    const data = images
                                    images[index].description = e.target.value
                                    setImages(data)
                                    onChange(data)
                                }}
                            />
                        </ImageOverlay>
                        <MainImage>
                            <Checkbox
                                checked={mainImage === index}
                                onChange={() => {
                                    if (index !== mainImage) {
                                        setMainImage(index)
                                    }
                                }}
                            >
                                Hauptbild
                            </Checkbox>
                        </MainImage>
                    </ImageContainer>
                ))}
                <AddButton
                    backgroundColor="secondary"
                    borderColor="dark"
                    color="light"
                    onClick={onTargetClick}
                />
                <input
                    onChange={handleDrop}
                    ref={fileInputRef}
                    type="file"
                    multiple
                />
            </Container>
        </FileDrop>
    )
}
export default ImageDrop
