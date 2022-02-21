import {createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import favoritesReducer from "./reducers/favorites"


const rootReducer = combineReducers({

  
    favorites: favoritesReducer,

})

export type RootState = ReturnType<typeof rootReducer>

export type InitialState ={
    favorites :{
        favoriteCountries :string[]
    }

   
}

const initialState: InitialState= {
    favorites : {favoriteCountries: []},
   

}
 
const storeFactory = () =>{
    const favoriteList= localStorage.getItem("countries")

    if(favoriteList){
        initialState.favorites.favoriteCountries =JSON.parse(favoriteList)
    }

const store = createStore(rootReducer,initialState, composeWithDevTools())

store.subscribe(()=>{
    const currentState =store.getState()
    const favoriteList = currentState.favorites.favoriteCountries
    localStorage.setItem("countries",JSON.stringify(favoriteList))
})

return store
}
export default storeFactory