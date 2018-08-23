import React from "react";
import { ScrollView } from "react-native";
import { Provider as ReduxProvider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";
import reducers from "../reducers";

import PropTypes from "prop-types";

const sagaMiddleware = createSagaMiddleware();
import { watcherSaga } from "../sagas";
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watcherSaga);

const Provider = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <ScrollView>{children}</ScrollView>
    </ReduxProvider>
  );
};

const styles = {
  content: {
    alignItems: "center"
  }
};

Provider.propTypes = {
  children: PropTypes.element.isRequired
};

export default Provider;
