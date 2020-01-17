import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//We don't really need export in store and persistor
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);
//We create a persisted version of our store

export default { store, persistor };
