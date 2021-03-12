import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagaz";
import reducers from "./reducers";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
console.log("midelware ", middlewares);
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true,
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(sagas);
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers");
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}
