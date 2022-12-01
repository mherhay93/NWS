interface ITypeCategories {
    id:string,
    name:string
}

export interface IDataCategories {
    dataCategories?: Array<ITypeCategories>
}

interface actionDataCategories {
    type:string,
    payload:any
}

export type actionsType = actionDataCategories

export enum constActionType {
    DATA_CATEGORIES = 'DATA_CATEGORIES'
}
