// https://blog.logrocket.com/react-design-patterns/
import Accordion from "../../components/CompoundComponents/Accordion";
import faqData from "./data";

export const CompoundComponents = () => {
  return (
    <Accordion>
      <Accordion.Title>LogRocket FAQ</Accordion.Title>
      <Accordion.Wrapper>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Wrapper>
    </Accordion>
  );
};


/*
  A ideia do Compound Components é o compartilhamento, entre componentes
  pais e filhos, estados, funções ou logicas de forma que o funcionamento
  correto de um deste se dar em dependencia do outro.
  Nesse padrão a passagem destes estados, funções ou logicas não se dar via
  props, mas sim por meio de uma estrutura de compartilhamento como
  Context API ou react.cloneElement.
*/