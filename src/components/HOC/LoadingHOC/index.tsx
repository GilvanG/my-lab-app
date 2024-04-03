import { ComponentType, JSX } from "react";
import Loading from "../../Loading";

type HOCProps =  {
  // Props para uso do HOC 
  isLoading?: boolean;
};

export function LoadingHOC<T extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
  return ({ isLoading, ...props }: HOCProps & T) => {
    return isLoading ? <WrappedComponent {...props as T} /> : <Loading />;
  };
}

/* 
  No HOC eu recebo um componente qualquer e retorno o mesmo componente,
  entretanto com a aplicação de alguma função, estrutura, componente ou 
  logica a mais (ex.: Loading durrante carregamento).
*/
