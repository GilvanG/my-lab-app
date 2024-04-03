import { useState } from "react";
import { actionTypes, toggleReducer, useToggle } from "../../components/StateReducer/Toggle";

import './StateReducer.css'

export function StateReducer() {
  const [clicksSinceReset, setClicksSinceReset] = useState(0);
  const tooManyClicks = clicksSinceReset >= 4

  const {on, toggle, setOn, setOff} = useToggle({
    reducer(currentState, action) {
      const changes = toggleReducer(currentState, action)
      if (tooManyClicks && action.type === actionTypes.toggle) {
        // other changes are fine, but on needs to be unchanged
        return {...changes, on: currentState.on}
      } else {
        // the changes are fine
        return changes
      }
    },
  })

  
    return (
      <div>
        <button className="switch-button" onClick={setOff} disabled={!on}>Switch Off</button>
        <button className="switch-button" onClick={setOn} disabled={on}>Switch On</button>
        <div onClick={() => {
          toggle()
          setClicksSinceReset(count => count + 1)
          }} style={{cursor: 'pointer', padding: '1rem' }}>
          {on ? 'Ligado' : 'Desligado'}
        </div>
        {tooManyClicks ? (
        <button onClick={() => setClicksSinceReset(0)}>Reset</button>
      ) : null}
      </div>
    );
  }
