import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import favoriteCountries from './reducer'

const rootReducer = combineReducers({ favorites: favoriteCountries })
// root reducer is a function and return type
export type RootState = ReturnType<typeof rootReducer>

export type InitialState = {
  favorites: { favoriteCountries: string[] }
}

//exact state how it looks in store
const initialState: InitialState = {
  favorites: { favoriteCountries: [] },
}

const storeFactory = () => {
  const favoriteList = localStorage.getItem('countries')
  if (favoriteList) {
    initialState.favorites.favoriteCountries = JSON.parse(favoriteList)
  }
  const store = createStore(rootReducer, initialState, composeWithDevTools())

  store.subscribe(() => {
    const currentState = store.getState()
    console.log('state', currentState)
    const favoriteList = currentState.favorites.favoriteCountries
    localStorage.setItem('countries', JSON.stringify(favoriteList))
  })
  return store
}
export default storeFactory