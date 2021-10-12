const lightGrey = '#EFE8EC'
const white = '#ffffff'
const black = '#000000'
const primary = '#3F8379'
const secondary = '#E15D3F'
const tertiary = '#85CA93'
const grey = '#b9b9b9'

const colors = {
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
