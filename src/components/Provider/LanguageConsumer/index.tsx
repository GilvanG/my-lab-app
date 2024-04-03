import { LanguageContext } from "../Context/languageContext";

export const LanguageConsumer = () => {
  return (
    <LanguageContext.Consumer>
      {({ lang }) => <p>The current language is: {lang}</p>}
    </LanguageContext.Consumer>
  );
};
