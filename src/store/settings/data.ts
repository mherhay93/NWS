import {actionsType, constActionType, IDataCategories} from "../../types/dataCategoriesType";

const initialState:IDataCategories = {
    dataCategories: [],
    cats: []
}

const dataReducer = (state = initialState, action:actionsType):IDataCategories => {
    switch (action.type) {
        case constActionType.DATA_CATEGORIES:
            return {...state, dataCategories:[action.payload]}
        case constActionType.DATA_CATS:
            return {...state, cats:[action.payload]}
        default:
            return state
    }
}


export default dataReducer
