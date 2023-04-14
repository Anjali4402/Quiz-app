import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./slices/UserSlice";


import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "root",
    storage
};

const rootReducer = combineReducers({
    players : UserSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware : [thunk]
});



export default store;
export const persistor = persistStore(store);




