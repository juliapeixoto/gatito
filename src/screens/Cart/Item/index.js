import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AddButton from "../../../components/AddButton";
import InputField from "../../../components/InputField";
import styles from "./styles";

export default function Item({
  name,
  price,
  description,
  quantity: initialQuantity,
}) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [total, setTotal] = useState(price * initialQuantity);

  const calcTotal = (newQuantity) => {
    setTotal(newQuantity * price);
  };

  const refreshTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calcTotal(newQuantity);
  };

  return (
    <>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </View>

      <View style={styles.cart}>
        <View>
          <View style={styles.value}>
            <Text style={styles.description}>Quantidade:</Text>
            <InputField
              styles={styles.quantity}
              inputValue={quantity}
              inputAction={refreshTotalQuantity}
            />
          </View>

          <View style={styles.value}>
            <Text style={styles.description}>Total:</Text>
            <Text style={styles.price}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(total)}
            </Text>
          </View>
        </View>

        <AddButton value="Remover do carrinho" action={() => {}} />
      </View>

      <View style={styles.divider} />
    </>
  );
}
