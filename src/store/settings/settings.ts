import {constSettings, IActionsTypeSettings, ITypeSettings} from "../../types/settingsTypes";

const initialState:ITypeSettings = {
    idCategories: '1',
    idCatsPage: '10'
}

const dataReducerSettings = (state = initialState, action:IActionsTypeSettings):ITypeSettings => {
    switch (action.type) {
        case constSettings.ID_CATEGORIES:
            return {...state, idCategories:action.payload}
        case constSettings.ID_CATS_PAGE:
            return {...state, idCatsPage:action.payload}
        default:
            return state
    }
}

export default dataReducerSettings
