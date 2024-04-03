import { LanguageContext } from "../Context/languageContext";

export const SwitchLang = () => {
  return (
    <LanguageContext.Consumer>
      {({ setLang }) => (
        <>
          <button
            onClick={() => {
              setLang("en");
            }}
          >
            en
          </button>
          <button onClick={() => setLang("pt-br")}>pt-br</button>
        </>
      )}
    </LanguageContext.Consumer>
  );
};
