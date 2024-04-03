import { createContext, useContext, useDebugValue, useState } from "react";

const UserContext = createContext<{
  name?: string;
  setName?: (name: string) => void;
}>({});
export const useUser = () => useContext(UserContext);

export function Context() {
  const [name, setName] = useState<string>("Ana");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <h1>{`Hello ${name}!`}</h1>
      <Component2 />
      <Component6 />
    </UserContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useUser();

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user.name} again!`}</h2>
    </>
  );
}

function Component6() {
  const user = useUser();
  return (
    <>
      <h1>Component 6</h1>
      <button onClick={() => user.setName && user.setName("Carla")}>
        Switch name
      </button>
    </>
  );
}
