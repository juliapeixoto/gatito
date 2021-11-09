import React from "react";
import { View } from "react-native";
import Services from "./src/screens/Services";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Cart from "./src/screens/Cart";
import Routes from "./src/routes";
import CommonScreen from "./src/components/CommonScreen";

export default function App() {
  return (
    <CommonScreen>
      <Routes />
    </CommonScreen>
  );
}
