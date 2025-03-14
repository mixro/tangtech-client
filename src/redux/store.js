import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clientReducer from "./userRedux";
import productReducer from "./productRedux";
import cartReducer from "./cartRedux";
import favouritesReducer from "./wishlistRedux";
import orderReducer from "./orderRedux";
import servicesReducer from "./serviceRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  
const rootReducer = combineReducers({ 
  client: clientReducer, 
  clientProducts: productReducer, 
  clientServices: servicesReducer, 
  clientCart: cartReducer,
  clientWishlist: favouritesReducer, 
  clientOrders: orderReducer 
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export let persistor = persistStore(store);