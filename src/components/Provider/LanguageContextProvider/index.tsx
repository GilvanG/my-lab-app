import { useMemo, useState } from "react"
import { LanguageContext } from "../Context/languageContext"

interface ILanguageContextProvider {
    children: JSX.Element;
}

export const LanguageContextProvider = ({children}: ILanguageContextProvider) => {
    const [lang, setLang] = useState('en');
    const value = useMemo(() => {
        return {lang, setLang}
    }, [lang, setLang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}