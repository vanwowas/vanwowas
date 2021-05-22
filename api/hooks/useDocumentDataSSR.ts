import { DocumentReference, DocumentData } from "@firebase/firestore-types";
import { useDocumentData } from "react-firebase-hooks/firestore";

function useDocumentDataSSR(ref: DocumentReference<DocumentData>, options) {
  const [value, loading, error] = useDocumentData(ref, options);

  if (options?.startWith && loading) {
    return [options.startWith, loading, error];
  } else {
    return [value, loading, error];
  }
}
