import { FormEvent, useRef } from "react";

export function UncontrolledForm() {
  // useRef é um React Hook que permite referenciar um 
  // valor que não é necessário para renderização.
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("onSubmit", emailRef.current?.value, passwordRef.current?.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" ref={emailRef} required />
      <input type="password" name="password" ref={passwordRef} required />
      <input type="submit" value="Submit" />
    </form>
  );
}
