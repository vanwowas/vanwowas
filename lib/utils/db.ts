export function getData<T>(
    data: FirebaseFirestore.QuerySnapshot<T>
): FirebaseFirestore.QueryDocumentSnapshot<T>[] {
    const d: FirebaseFirestore.QueryDocumentSnapshot<T>[] = []
    data.forEach((b) => {
        d.push(b)
    })
    return d
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const buildURLQuery = (data: any) =>
    Object.entries(data)
        .map((pair) =>
            pair.map((e: unknown) => encodeURIComponent(e as string)).join('=')
        )
        .join('&')
