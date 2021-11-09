import React from "react";
import { Text, View } from "react-native";
import AddButton from "../AddButton";
import styles from "./styles";

export default function StatusCart({ total }) {
  return (
    <View style={styles.content}>
      <View style={styles.total}>
        <Text style={styles.description}>Total do carrinho:</Text>
        <Text style={styles.value}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(total)}
        </Text>
      </View>
      <View style={styles.button}>
        <AddButton value="Concluir pedido" inverted />
      </View>
    </View>
  );
}
