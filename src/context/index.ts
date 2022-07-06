import { createContext } from "react";
import { InitialType } from "../interfaces";


const initialValue: InitialType = {
    packages: [],
    loading: true,
    searchPackage: (name: string) => {},
    notFound: false
}

export const npmContext = createContext<InitialType>(initialValue);