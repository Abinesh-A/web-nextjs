import { applyMiddleware,legacy_createStore as createStore} from "redux";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import reducer from "./reducer";

const persist = persistReducer({ key: "root", storage }, reducer);
export const store = createStore(persist, applyMiddleware(logger));
export const persistor = persistStore(store);
