/*import { Country } from "../../types"*/
import { Actions, ADD_FAVORITE ,REMOVE_FAVORITE} from "../action"


type InitState ={
    favoriteCountries: string[]
}

const initialState :InitState= {
     favoriteCountries : [],
    
}

        /*localStorage.setItem("countries",JSON.stringify(["1","2"]))*/

 const reducer = (state = initialState, action:Actions): InitState  => {

    switch (action.type) {
    case ADD_FAVORITE:
        const countryName = action.payload
        const isInList = state.favoriteCountries.some(
            name=>name === countryName
        )
            if (isInList){
                return state
            }
    
            return{
                ...state,
                favoriteCountries: [...state.favoriteCountries, countryName]
            }

            case REMOVE_FAVORITE:
                const removeCountryName = action.payload
                const newList = state.favoriteCountries.filter(
                    name=> name !== removeCountryName
                )
            return {
                ...state,
                favoriteCountries: newList,
            }
        default:
            return state
        
        }
 }
 export default reducer