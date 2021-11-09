import React from "react";
import { FlatList } from "react-native";
import StatusCart from "../../components/StatusCart";
import Item from "./Item";

const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos",
    quantity: 1,
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 67.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas.",
    quantity: 2,
  },
  {
    id: 3,
    name: "Outra vacina",
    price: 99.9,
    description: "Uma dose de outra vacina. Seu gato precisa de uma por ano.",
    quantity: 1,
  },
];

export default function Cart() {
  const total = services.reduce(
    (sum, { price, quantity }) => sum + price * quantity,
    0
  );

  return (
    <>
      <StatusCart total={total} />
      <FlatList
        data={services}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={({ id }) => String(id)}
      />
    </>
  );
}
