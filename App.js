import React from "react";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Routes from "./src/routes";
import CommonScreen from "./src/components/CommonScreen";

export default function App() {
  return (
    <CommonScreen>
      <Routes />
    </CommonScreen>
  );
}
