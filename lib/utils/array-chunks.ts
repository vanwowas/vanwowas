export const arrayChunks = <T>(array: T[], chunkSize: number): T[][] =>
    Array(Math.ceil(array.length / chunkSize))
        .fill('')
        .map((_, index) => index * chunkSize)
        .map((begin) => array.slice(begin, begin + chunkSize))
