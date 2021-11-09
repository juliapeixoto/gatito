import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AddButton from "../../../components/AddButton";
import InputField from "../../../components/InputField";
import styles from "./styles";

export default function Item({ name, price, description }) {
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [expand, setExpand] = useState(false);

  const calcTotal = (newQuantity) => {
    setTotal(newQuantity * price);
  };

  const refreshTotalQuantity = (newQuantity) => {
    setQuantity(newQuantity);
    calcTotal(newQuantity);
  };

  const expandItem = () => {
    setExpand(!expand);
    refreshTotalQuantity(0);
  };

  return (
    <>
      <TouchableOpacity style={styles.info} onPress={expandItem}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Text>
      </TouchableOpacity>

      {expand && (
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

          <AddButton value="Adicionar ao carrinho" action={() => {}} />
        </View>
      )}
      <View style={styles.divider} />
    </>
  );
}
