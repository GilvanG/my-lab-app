import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import {
  Body,
  Container,
  Header,
  Inner,
  Item,
  Title,
  Wrapper,
} from "./Accordion.styles";

interface IAccordion {
  children: React.ReactNode;
}

const ToggleContext = createContext<{
  toggleShow?: boolean;
  toggleIsShown?: (show: boolean) => void;
}>({});
export default function Accordion({ children, ...restProps }: IAccordion) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({
  children,
  ...restProps
}: IAccordion) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Wrapper = function AccordionWrapper({
  children,
  ...restProps
}: IAccordion) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Accordion.Item = function AccordionItem({
  children,
  ...restProps
}: IAccordion) {
  const [toggleShow, setToggleShow] = useState(true);
  // const toggleIsShown = useMemo(
  //   () => (isShown: boolean) => setToggleShow(!isShown),
  //   [setToggleShow]
  // );
  const toggleIsShown = useCallback(
    (isShown: boolean) => setToggleShow(!isShown),
    [setToggleShow]
  );
  const value = useMemo(() => {
    return { toggleShow, toggleIsShown };
  }, [toggleShow, toggleIsShown]);
  return (
    <ToggleContext.Provider value={value}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.ItemHeader = function AccordionHeader({
  children,
  ...restProps
}: IAccordion) {
  const { toggleShow, toggleIsShown } = useContext(ToggleContext);
  return (
    <Header
      onClick={() => {
        if (toggleIsShown) toggleIsShown(!!toggleShow);
      }}
      {...restProps}
    >
      {children}
    </Header>
  );
};

Accordion.Body = function AccordionBody({
  children,
  ...restProps
}: IAccordion) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? "open" : ""} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
