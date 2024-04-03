import { ComponentType, JSX, Profiler } from "react";

type HOCProps =  {
  // Props para uso do HOC 
  id?: string;
  active?: boolean;
};
function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
    console.log({id, phase, actualDuration, baseDuration, startTime, commitTime})
}

export function ProfilerHOC<T extends JSX.IntrinsicAttributes>(WrappedComponent: ComponentType<T>) {
  return ({ id, active, ...props }: HOCProps & T) => {
    return id && active ? <Profiler id={id} onRender={onRender}><WrappedComponent {...props as T} /></Profiler> : <WrappedComponent {...props as T} />;
  };
}
/* 
  No HOC eu recebo um componente qualquer e retorno o mesmo componente,
  entretanto com a aplicação de alguma função, estrutura, componente ou 
  logica a mais (ex.: Loading durrante carregamento).
*/
