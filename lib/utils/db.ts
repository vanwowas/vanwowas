export function getData<T>(
    data: FirebaseFirestore.QuerySnapshot<T>
): FirebaseFirestore.QueryDocumentSnapshot<T>[] {
    const d: FirebaseFirestore.QueryDocumentSnapshot<T>[] = []
    data.forEach((b) => {
        d.push(b)
    })
    return d
}
