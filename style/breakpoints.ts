export const breakpoints = {
    small: 420,
    medium: 768,
    large: 1200,
}

export function upFromBreakpoint(breakpoint: keyof typeof breakpoints): string {
    return `@media (min-width: ${breakpoints[breakpoint]}px)`
}

export function upToBreakpoint(breakpoint: keyof typeof breakpoints): string {
    return `@media (max-width: ${breakpoints[breakpoint] - 1}px)`
}
