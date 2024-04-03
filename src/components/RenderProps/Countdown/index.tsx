import { ReactNode, useEffect, useState } from "react";

interface ICountdown {
  displayTimer: (timer: number) => JSX.Element;
  children?: ReactNode;
}

const SECOND = 1000;
const INITIAL_COUNTDOWN = 5 * 60 * SECOND;

export const Countdown = ({ displayTimer, children }: ICountdown) => {
  const [timer, setTimer] = useState(INITIAL_COUNTDOWN);
  
  useEffect(() => {
    setTimeout(() => {
      if (timer)
        setTimer(timer - 1*SECOND);
    }, 1*SECOND);
  }, [timer]);

  return (
    <>
      {displayTimer(timer)}
      {children}
    </>
  );
};

/*
  Com Render Props podemos "tercerizar" alguma funcionalidade de um componente, 
  a ideia principal é Renderizar algo obtido a partir de uma Prop/atributo.
  Neste caso, o Component Coutdown se comporta como um container para a logica
  de contagem, enquanto a Prop reccebida de displayTimer se preocupa com a 
  visualização do timer.
  Com isso podemos reutilizar mais facilmente Conteiners nos quais alguma ação,
  funcionalidade ou logica é implementada.
*/
