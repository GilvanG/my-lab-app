import { render, screen } from "@testing-library/react";
import { CountSimple } from "../../../components/Tests/Count";
import user from "@testing-library/user-event";
import { sumCount } from "./testLibrary";
// Jest

describe("CountSimple", () => {
  user.setup();
  const incrementFn = jest.fn();
  const decrementFn = jest.fn();

    
  test("Funções sendo chamadas", async () => {
    render(
      <CountSimple
        value={1}
        incrementFn={incrementFn}
        decrementFn={decrementFn}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: "+" });
    const decrementBtn = screen.getByRole("button", { name: "-" });
    await user.click(incrementBtn);
    await user.click(decrementBtn);
    await user.click(decrementBtn);
    expect(incrementFn).toHaveBeenCalled();
    expect(decrementFn).toHaveBeenCalledTimes(2);
  });

  test("Botão em Foco", async () => {
    render(
      <CountSimple
        value={1}
        incrementFn={incrementFn}
        decrementFn={decrementFn}
      />
    );

    const incrementBtn = screen.getByRole("button", { name: "+" });
    await user.click(incrementBtn);
    expect(incrementBtn).toHaveFocus();

    const decrementBtn = screen.getByRole("button", { name: "-" });
    await user.click(decrementBtn);
    expect(decrementBtn).toHaveFocus();
  });

  test("Botão Desabilitado", async () => {
    render(
      <CountSimple
        value={0}
        incrementFn={incrementFn}
        decrementFn={decrementFn}
      />
    );

    const decrementBtn = screen.getByRole("button", { name: "-" });
    expect(decrementBtn).toBeDisabled();
  });

  test("Teste Função", () => {
    expect(sumCount(2)).toBe(3)
  })
});
