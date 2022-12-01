import {actionsType, constActionType, IDataCategories} from "../../types/dataCategoriesType";

const initialState:IDataCategories = {
    dataCategories: []
}

const dataReducer = (state = initialState, action:actionsType):IDataCategories => {
    switch (action.type) {
        case constActionType.DATA_CATEGORIES:
            return state
        default:
            return state
    }
}


export default dataReducer
