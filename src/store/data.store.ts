import { createStore, applyMiddleware, compose } from "redux"
import data from "../reducers/data.reducer"
import thunk from 'redux-thunk'


const extensions = process.env.MODE === 'development' ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() : {}
export default createStore(data, compose( applyMiddleware(thunk), extensions)) 