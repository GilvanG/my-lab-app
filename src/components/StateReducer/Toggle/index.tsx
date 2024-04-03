// https://kentcdodds.com/blog/inversion-of-control
import { useReducer } from "react";


interface IAction {
  type: string
}
interface IState {
  on: boolean;
}
interface IUseToggle {
  reducer?: (state: IState, action: IAction) => { on: boolean; }
}

export const actionTypes = {
  toggle: 'TOGGLE',
  on: 'ON',
  off: 'OFF',
}

export function toggleReducer(state: IState, action: IAction) {
  switch (action.type) {
    case actionTypes.toggle: {
      return {on: !state.on}
    }
    case actionTypes.on: {
      return {on: true}
    }
    case actionTypes.off: {
      return {on: false}
    }
    default: {
      throw new Error(`Unhandled type: ${action.type}`)
    }
  }
}


export function useToggle({ reducer = toggleReducer }: IUseToggle) {
  const [{on}, dispatch] = useReducer(reducer, {on: false})

  const toggle = () => dispatch({type: actionTypes.toggle})
  const setOn = () => dispatch({type: actionTypes.on})
  const setOff = () => dispatch({type: actionTypes.off})

  return {on, toggle, setOn, setOff}
}

/*
  A ideia do State Reducer é implementação do principio de Inversão de controle,
  seja, para manipulção de um estado ou de um componente.
  Tornando o componente pai, class ou função (etc) mais generico possivel,
  enquanto o que se faz uso dele aplicando regras necessarias no seu contexto/cenario.
  Essa ideia é usada a rodo e direita com REDUX
  Note que no useToggle é possivel subtituir o comportamento padrão para um mais
  especifico, através do parametro reducer, implementando assim uma maior manipulção do
  componente. A vantagem de usar isso no Typescript é que a tipagem garante uma
  estrutura mais padronizada e minimiza possiveis problemas de tipagem.
*/

/*
  Inversão de Controle:
    Segundo a página Inversion of control da Wikipedia diz sobre isso:
    
    "...na programação tradicional, o código personalizado que expressa o objetivo do
    programa chama bibliotecas reutilizáveis para cuidar de tarefas genéricas, mas com
    inversão de controle, é a estrutura que chama o código personalizado ou específico
    da tarefa."
*/