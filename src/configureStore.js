import root from "./reducers"
import { createStore } from "redux";

const configureStore = () => {
    const store = createStore(root)
    return store
}

export default configureStore