const lightGrey = '#EFE8EC'
const white = '#ffffff'
const black = '#000000'
const primary = '#3F8379'
const secondary = '#E15D3F'
const tertiary = '#85CA93'
const grey = '#b9b9b9'
const dark = '#000'
const sand = '#FFC15E'
const warn = '#7D1538'

const colors = {
    secondary,
    grey,
    warn,
    tertiary,
    lightGrey,
    primary,
    white,
    dark,
    sand,
    pageBackground: lightGrey,
    headerBackground: white,
    footerBackground: white,
    spinner: secondary,
    teaserCard: {
        background: primary,
        headline: tertiary,
        description: black,
    },
    infoCard: {
        background: white,
    },
    textColor: {
        primary,
        secondary,
        tertiary,
        white,
        black,
    },
    buttonBackground: {
        primary,
        secondary,
        tertiary,
        disabled: grey,
    },
    border: {
        light: white,
        dark: black,
    },
    buttonText: {
        dark: black,
        light: white,
        pageBackground: lightGrey,
    },
    linkText: black,
}

export default colors

type RGB = [number, number, number]

export const hexToRgb = (hex: string): RGB => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
        ? [
              parseInt(result[1], 16),
              parseInt(result[2], 16),
              parseInt(result[3], 16),
          ]
        : [0, 0, 0]
}
