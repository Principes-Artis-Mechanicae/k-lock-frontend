import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./Router";
import "./global.css";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/lib/integration/react";

export default function App() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    );
}
