import React, { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import { AddButton } from '../pages/builder/builds'
import ImageGrid from './ImageGrid'
import Add from '../style/icons/add.svg'
import colors from '../style/colors'
import { FileDrop } from 'react-file-drop'

const Container = styled.div<{ empty: boolean; isDragActive: boolean }>`
    min-height: 50vh;
    transition: transform 300ms;
    cursor: pointer;
    img {
        color: ${colors.buttonBackground.primary};
    }
    ${AddButton} {
        transition: transform 300ms;
    }
    input {
        width: 0;
        height: 0;
        opacity: 0;
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
        p.empty &&
        css`
            background-color: ${colors.buttonBackground.tertiary};
            opacity: 0.75;
            border-radius: 0.5rem;
            ${AddButton} {
                transform: scale(1.1);
                transition: transform 300ms;
            }
        `}
`

const ImageDrop: React.FC = () => {
    const [files, setFiles] = useState<(File | ReactNode)[]>([])
    const [isDragActive, setIsDragActive] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const gridItems = useMemo<(File | ReactNode)[]>(() => {
        if (files) {
            return files.map((f) =>
                f instanceof File ? (
                    URL.createObjectURL(f)
                ) : (
                    <AddButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    >
                        <Add />
                    </AddButton>
                )
            )
        }
        return []
    }, [files])

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
            if (event) {
                const f = files
                f.pop()
                let newFiles = f
                if (event instanceof FileList) {
                    newFiles = [...files, ...Array.from(event)]
                } else if (event) {
                    newFiles = [
                        ...files,
                        ...Array.from(event.target.files || []),
                    ]
                }
                const placeholder =
                    "data:image/svg+xml,%3Csvg viewBox='0 0 2093 2910' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='2093' height='2910' fill='%23E15D3F'/%3E%3Cpath d='M1429.95 1369.38H1131.77V1071.19C1131.77 1048.6 1122.79 1026.93 1106.81 1010.95C1090.84 994.976 1069.17 986 1046.57 986C1023.98 986 1002.31 994.976 986.33 1010.95C970.353 1026.93 961.377 1048.6 961.377 1071.19V1369.38H663.195C640.6 1369.38 618.93 1378.35 602.953 1394.33C586.976 1410.31 578 1431.98 578 1454.57C578 1477.17 586.976 1498.84 602.953 1514.81C618.93 1530.79 640.6 1539.77 663.195 1539.77H961.377V1837.95C961.377 1849.14 963.58 1860.21 967.861 1870.55C972.143 1880.89 978.418 1890.28 986.329 1898.19C994.24 1906.1 1003.63 1912.38 1013.97 1916.66C1024.3 1920.94 1035.38 1923.14 1046.57 1923.14C1069.17 1923.14 1090.84 1914.17 1106.81 1898.19C1122.79 1882.21 1131.76 1860.54 1131.77 1837.95V1539.77H1429.95C1441.14 1539.77 1452.21 1537.56 1462.55 1533.28C1472.89 1529 1482.28 1522.72 1490.19 1514.81C1498.1 1506.9 1504.38 1497.51 1508.66 1487.17C1512.94 1476.84 1515.14 1465.76 1515.14 1454.57C1515.14 1431.98 1506.17 1410.31 1490.19 1394.33C1474.21 1378.35 1452.54 1369.38 1429.95 1369.38V1369.38Z' stroke='white' stroke-width='40' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
                if (
                    newFiles.length % 7 !== 0 &&
                    !newFiles.includes(placeholder)
                ) {
                    // add placholder image
                    setFiles([...newFiles, placeholder])
                } else {
                    setFiles(newFiles)
                }
            }
        },
        [files]
    )

    const onTargetClick = useCallback(() => {
        fileInputRef.current?.click()
    }, [])

    return (
        <FileDrop
            onTargetClick={onTargetClick}
            onDragOver={() => handleFrameDrag(true)}
            onDragLeave={() => handleFrameDrag(false)}
            onDrop={handleDrop}
        >
            <Container empty={!files.length} isDragActive={isDragActive}>
                <input
                    onChange={handleDrop}
                    ref={fileInputRef}
                    type="file"
                    multiple
                />
                {files.length ? (
                    <ImageGrid images={gridItems} unoptimized />
                ) : (
                    <AddButton
                        backgroundColor="secondary"
                        borderColor="dark"
                        color="light"
                    >
                        <Add />
                    </AddButton>
                )}
            </Container>
        </FileDrop>
    )
}
export default ImageDrop
