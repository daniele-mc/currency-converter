import React from "react";

import Converter from "../Converter";
import { Container, Line, Title, Card } from "./styles";

const Layout = () => {
  return (
    <Container>
      <Card>
        <Title>Conversor de Moeda</Title>

        <Line>
          <Converter currencyA="USD" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="USD"></Converter>
        </Line>

        <Line>
          <Converter currencyA="CAD" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="CAD"></Converter>
        </Line>

        <Line>
          <Converter currencyA="EUR" currencyB="BRL"></Converter>
          <Converter currencyA="BRL" currencyB="EUR"></Converter>
        </Line>
      </Card>
    </Container>
  );
};

export default Layout;
