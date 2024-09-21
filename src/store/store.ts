import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";

import { formReducer } from "./slice/form.slice";
import { uiReducer } from "./slice/ui.slice";
import { authReducer } from "@/store/slice/auth.slice";
import { periodReducer } from "@/store/slice/period.slice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["period", "auth"],
};

const rootReducer = combineReducers({
    period: periodReducer,
    auth: authReducer,

    form: formReducer,
    ui: uiReducer,
});

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
            },
        }),
});

export const persistor = persistStore(store);

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type GetState = typeof store.getState;
