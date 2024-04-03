import { LanguageConsumer } from "../../components/Provider/LanguageConsumer";
import { LanguageContextProvider } from "../../components/Provider/LanguageContextProvider";
import { SwitchLang } from "../../components/Provider/SwitchLanguage";

export const Provider = () => {
  return (
    <LanguageContextProvider>
      <>
        <LanguageConsumer />
        <SwitchLang />
      </>
    </LanguageContextProvider>
  );
};

/*
    Provider não tem segredo Compartilhar dados de forma globa
    para o conjunto de componentes que o Provider envolver.
    Forma eficiente de passar dados entre elementos de diferentes
    niveis da árvore DOM
*/
