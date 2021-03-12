import React, { useState } from "react";

import { Container, Text, Button, InputCureency } from "./styles";

function Converter(props) {
  const [currencyA_value, setCurrencyA] = useState();
  const [currencyB_value, setCurrencyB] = useState();

  function convert() {
    let of_to = `${props.currencyA}_${props.currencyB}`;
    let url = `https://free.currconv.com/api/v7/convert?q=${of_to}&compact=ultra&apiKey=64e9ed8cc576c2e059f7`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let price = json[of_to];
        let currencyB_value = (parseFloat(currencyA_value) * price).toFixed(2);
        setCurrencyB(currencyB_value);
      });

    console.log(currencyA_value);
  }

  return (
    <Container>
      <Text>
        {props.currencyA} para {props.currencyB}
      </Text>

    <InputCureency type="text"
        onChange={(event) => {
          setCurrencyA(event.target.value);
        }}></InputCureency>

      <Button onClick={convert}>
        Converter
      </Button>

      <Text>Valor convertido</Text>

      <Text>{currencyB_value}</Text>
    </Container>
  );
}

export default Converter;
