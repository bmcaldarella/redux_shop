import { createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer"; // ✅ Asegurar la ruta correcta

const store = createStore(cartReducer);

export default store;
