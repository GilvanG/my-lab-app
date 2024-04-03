import { createContext } from "react";

export const LanguageContext = createContext({lang: '', setLang: (newLang: string) => {}});