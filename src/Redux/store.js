import {createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import reducer from "./reducer"

const initialState= {
    favoriteCountries : []

}

const storeFactory = () =>{
    const favoriteList= localStorage.getItem("countries")

    if(favoriteList){
        initialState.favoriteCountries =JSON.parse(favoriteList)
    }


const store = createStore(reducer,initialState, composeWithDevTools())

store.subscribe(()=>{
    const currentState =store.getState()
    const favoriteList = currentState.favoriteCountries
    localStorage.setItem("countries",JSON.stringify(favoriteList))
})

return store

}

export default storeFactory