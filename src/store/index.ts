import AsyncStorage from '@react-native-async-storage/async-storage'
import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}