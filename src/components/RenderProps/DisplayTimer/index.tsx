// Copiei a logica de exibição aqui https://www.youtube.com/watch?v=qcIhUoBZaHg
import { useMemo } from "react";

export const DisplayTimer = (timer: number) => {
  const minutes = useMemo(()=> Math.floor(timer / (60*1000)), [timer])
  const seconds = useMemo(()=> Math.floor((timer / 1000) % (60)), [timer])
  return (
    <>
    <span>
      {minutes.toString().padStart(2, '0')}
    </span>
    <span>
      :
    </span>
    <span>
      {seconds.toString().padStart(2, '0')}
    </span>
    </>
  );
};
