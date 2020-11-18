import React from 'react';
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";

import Routes from './routes';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

export default function App() {
  return (
    <Provider template={AlertTemplate} {...options}>
      <Routes />
    </Provider>
  );
}
