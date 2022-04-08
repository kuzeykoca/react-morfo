import React from "react"
import ReactDOM from "react-dom/client"
import "./src/assets/styles/style.scss"
import "normalize.css/normalize.css"
import "bootstrap/dist/css/bootstrap.css"
import AppRouter from "./src/routers/AppRouter"
import { ToastContainer } from "./src/components/Toast"
import { Provider } from "react-redux"
import ConfigureStore from "./src/store/data.store"

const App = () => {
    return (
        <Provider store={ConfigureStore}>
            <AppRouter />
            <ToastContainer />
        </Provider>
    )
}

const container: any = document.getElementById("app")
ReactDOM.createRoot(container).render(<App />)