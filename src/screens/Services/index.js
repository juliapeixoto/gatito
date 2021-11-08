import React from "react";
import { Text, SafeAreaView, StatusBar } from "react-native";

const services = [
  {
    id: 1,
    name: "Banho",
    price: 79.9,
    description: "NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos",
  },
  {
    id: 2,
    name: "Vacina V4",
    price: 67.9,
    description: "Uma dose da vacina V4. Seu gato precisa de duas.",
  },
  {
    id: 3,
    name: "Outra vacina",
    price: 99.9,
    description: "Uma dose de outra vacina. Seu gato precisa de uma por ano.",
  },
];

export default function Services() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Text>oie</Text>
    </SafeAreaView>
  );
}
